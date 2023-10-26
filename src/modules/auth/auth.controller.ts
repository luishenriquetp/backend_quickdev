import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/signIn.dto';
import { SignupDTO } from './dto/signup.dto';
import { IsPublic } from 'src/shared/decorators/isPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() signInDto: SignInDTO) {
    return this.authService.singIn(signInDto);
  }

  @Post('signup')
  create(@Body() signupDTO: SignupDTO) {
    return this.authService.signUp(signupDTO);
  }
}
