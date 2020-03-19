import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-creadentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ){}

  @Post('/signup')
  sidnUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
    //console.log(authCredentialsDto)
    return this.authService.signUp(authCredentialsDto);
  }
}
