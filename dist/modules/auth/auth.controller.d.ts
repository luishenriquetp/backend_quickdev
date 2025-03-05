import { AuthService } from './auth.service';
import { SignInDTO } from './dto/signIn.dto';
import { SignupDTO } from './dto/signup.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDTO): Promise<{
        accessToken: string;
    }>;
    create(signupDTO: SignupDTO): Promise<{
        accessToken: string;
    }>;
}
