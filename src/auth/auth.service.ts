import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { SignInUserDto } from './dto/signin-user.dto';
import { SignupUserDto } from './dto/signup-user.dto';
import { createHmac, randomBytes } from 'crypto';
import { RefreshToken } from './entity/refresh-token.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private userService: UserService,
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepository: Repository<RefreshToken>
  ) { }

  async signin(userDto: SignInUserDto) {
    const user = await this.userService.getByEmail(userDto.email);
    const hmac = createHmac('SHA512', user.passwordSalt);
    hmac.update(userDto.password);
    const computedHash: Buffer = hmac.digest();

    if (Buffer.compare(computedHash, user.passwordHash) === 0) {
      const refreshToken = this.createRefreshToken(user, "0.0.0.0")
      await this.deleteOldRefreshTokens(user.id);
      const createdRefreshToken = await this.refreshTokenRepository.save(refreshToken)
      const {token, expires } = createdRefreshToken
      return {
        accessToken: await this.signToken(user.id, user.email, user.username),
        refreshToken: {token: token, expires: expires}
      }
    }
    throw new BadRequestException('Wrong credentials');
  }

  async signup(signupUserDto: SignupUserDto) {
    const user: User = new User();
    user.email = signupUserDto.email;
    user.firstName = signupUserDto.firstName;
    user.lastName = signupUserDto.lastName;
    user.username = signupUserDto.userName;

    //salt and hash the password
    const salt = randomBytes(128);
    const hmac = createHmac('SHA512', salt);
    hmac.update(signupUserDto.password);
    const computedHash: Buffer = hmac.digest();

    user.passwordSalt = salt;
    user.passwordHash = computedHash;
    const createdUser = await this.userService.add(user);
    return {
      email: createdUser.email,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      username: createdUser.username,
    };
  }

  async refreshTokens(refreshToken: string, ipAddress: string){
    const refreshTokenResult: RefreshToken = await this.refreshTokenRepository.findOne({
      where: {
        token: refreshToken
      },
      relations: {
        user: true
      }
    });
    if (!refreshTokenResult)
      throw new BadRequestException("Refresh token doesn't exist")

    if (refreshTokenResult.revoked !== null) {
      await this.revokeDescendantRefreshTokens(refreshTokenResult, ipAddress, `Attempted reuse of revoked ancestor token: ${refreshTokenResult.token}`)
      throw new BadRequestException("This refresh token is revoked because attempted reuse of revoked ancestor")
    }

    if (new Date().getTime() >= refreshTokenResult.expires.getTime())
      throw new BadRequestException("Refresh token is not active")

    const user = await this.userService.getById(refreshTokenResult.user.id);
    const newRefreshToken = await this.rotateRefreshToken(user, refreshTokenResult, ipAddress);
    const addedRefreshToken = await this.refreshTokenRepository.save(newRefreshToken);
    const createdAccessToken = await this.signToken(user.id, user.email, user.username);
    const {token, expires} = addedRefreshToken
    return {
      accessToken: createdAccessToken,
      refreshToken: {
        token,
        expires
      }
    }
  }

  private signToken(
    userId: number,
    email: string,
    username: string,
  ): Promise<string> {
    const data = { sub: userId, email: email, username: username };

    return this.jwt.signAsync(data, {
      expiresIn: '15m',
      secret: process.env.SECRET_KEY, //.env dosyasına taşı
    });
  }

  //---REFRESH TOKEN---
  createRefreshToken(user: User, ipAddress: string): RefreshToken {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    const refreshToken = new RefreshToken()
    refreshToken.token = this.generateRandomRefreshToken()
    refreshToken.user = user
    refreshToken.expires = expirationDate
    refreshToken.createdByIp = ipAddress
    return refreshToken
  }


  private generateRandomRefreshToken(): string {
    const numberByte = randomBytes(32);
    return numberByte.toString('base64');
  }

  private async deleteOldRefreshTokens(userId: number){
    const refreshTokens = await this.refreshTokenRepository.find({
      where: {user: {id: userId}}
    })
    const result = await this.refreshTokenRepository.remove(refreshTokens);
  }

  private async rotateRefreshToken(user: User, refreshToken: RefreshToken, ipAddress: string){
    const newRefreshToken = this.createRefreshToken(user, ipAddress);
    await this.revokeRefreshToken(refreshToken, ipAddress, "New refresh token requested", newRefreshToken.token)
    return newRefreshToken;
  }

  private async revokeRefreshToken(refreshToken: RefreshToken, ipAddress: string, reason: string | null, replacedByToken: string | null){
    refreshToken.revoked = new Date();
    refreshToken.revokedByIp = ipAddress;
    refreshToken.reasonRevoked = reason;
    refreshToken.replacedByToken = replacedByToken;
    await this.refreshTokenRepository.save(refreshToken);
  }

  private async revokeDescendantRefreshTokens(refreshToken: RefreshToken, ipAddress: string, reason: string){
    if (!refreshToken.replacedByToken) return

    const childToken = await this.refreshTokenRepository.findOne({
      where: {
        token: refreshToken.replacedByToken
      }
    })
    if (childToken !== null && childToken.revoked === null)
      await this.revokeRefreshToken(childToken, ipAddress, reason, null)
    else
      await this.revokeDescendantRefreshTokens(childToken, ipAddress, reason);
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
