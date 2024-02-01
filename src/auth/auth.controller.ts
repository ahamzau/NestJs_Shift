import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/signin-user.dto';
import { SignupUserDto } from './dto/signup-user.dto';
import { RefreshTokenDto } from './dto/refreshToken.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() credentials: SignInUserDto) {
    const data = await this.authService.signin(credentials);
    return data;
  }

  @Post('signup')
  signup(@Body() credentials: SignupUserDto) {
    return this.authService.signup(credentials);
  }

  @Post('refreshToken')
  refreshTokens(@Body() refreshToken: RefreshTokenDto, req: Request){
    return this.authService.refreshTokens(refreshToken.token, "0.0.0.0")
  }
}
