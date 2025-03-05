import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDTO } from './dto/signIn.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.reporitories';
import { compare, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignupDTO } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersRepo: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async singIn({ email, password }: SignInDTO) {
    const user = await this.usersRepo.findByEmail(email);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  async signUp({ email, name, password }: SignupDTO) {
    const emailTaken = await this.usersRepo.findByEmail(email);

    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.usersRepo.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
