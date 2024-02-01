import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { SignInUserDto } from './dto/signin-user.dto';
import { SignupUserDto } from './dto/signup-user.dto';
import { RefreshToken } from './entity/refresh-token.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private jwt;
    private userService;
    private readonly refreshTokenRepository;
    constructor(jwt: JwtService, userService: UserService, refreshTokenRepository: Repository<RefreshToken>);
    signin(userDto: SignInUserDto): Promise<{
        accessToken: string;
        refreshToken: {
            token: string;
            expires: Date;
        };
    }>;
    signup(signupUserDto: SignupUserDto): Promise<{
        email: string;
        firstName: string;
        lastName: string;
        username: string;
    }>;
    refreshTokens(refreshToken: string, ipAddress: string): Promise<{
        accessToken: string;
        refreshToken: {
            token: string;
            expires: Date;
        };
    }>;
    private signToken;
    createRefreshToken(user: User, ipAddress: string): RefreshToken;
    private generateRandomRefreshToken;
    private deleteOldRefreshTokens;
    private rotateRefreshToken;
    private revokeRefreshToken;
    private revokeDescendantRefreshTokens;
    private delay;
}
