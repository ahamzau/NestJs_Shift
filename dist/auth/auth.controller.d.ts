import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/signin-user.dto';
import { SignupUserDto } from './dto/signup-user.dto';
import { RefreshTokenDto } from './dto/refreshToken.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signin(credentials: SignInUserDto): Promise<{
        accessToken: string;
        refreshToken: {
            token: string;
            expires: Date;
        };
    }>;
    signup(credentials: SignupUserDto): Promise<{
        email: string;
        firstName: string;
        lastName: string;
        username: string;
    }>;
    refreshTokens(refreshToken: RefreshTokenDto, req: Request): Promise<{
        accessToken: string;
        refreshToken: {
            token: string;
            expires: Date;
        };
    }>;
}
