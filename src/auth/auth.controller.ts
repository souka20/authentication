import {Request,Response,Body, Post ,Get, Controller, UseGuards,UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private  authService: AuthService) {}


@Post('signup')
signup(@Body() dto: AuthDto){
  return this.authService.signup(dto);
}
@Post('signin')
async signin(@Body() dto:AuthDto,@Request() req ,@Response() res){
  let auth = await this.authService.signin(dto,req,res);
  // throw new UnauthorizedException();
  return res.status(200).json(auth)
}
@Get('signout')
signout(@Request()req , @Response() res){
  return this.authService.signout(req,res)
}

  }

