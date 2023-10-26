import { SignInDTO } from './dto/signIn.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.reporitories';
import { JwtService } from '@nestjs/jwt';
import { SignupDTO } from './dto/signup.dto';
export declare class AuthService {
    private usersRepo;
    private readonly jwtService;
    constructor(usersRepo: UsersRepository, jwtService: JwtService);
    singIn({ email, password }: SignInDTO): Promise<{
        accessToken: string;
    }>;
    signUp({ email, name, password }: SignupDTO): Promise<{
        accessToken: string;
    }>;
    private generateAccessToken;
}
