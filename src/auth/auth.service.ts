import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constants';
import { Request, Response } from 'express';
@Injectable()
export class AuthService {
  constructor(private prisma :PrismaService, private jwt:JwtService){}
async signup(dto:AuthDto){
    const {email , password } = dto;
    const userExists =await this.prisma.user.findUnique({ where :{email}});
    
    if(userExists){
        throw new BadRequestException('email already exist');
    }
    const hashedPassword = await this.hashPassword(password);
       await this.prisma.user.create({
        data:{
          email,
          hashedPassword,  
        },
       });
       return 'user created'
}
async signin(dto:AuthDto,req:Request,res: Response){
    const {email , password } = dto;
    const userExists =await this.prisma.user.findUnique({ where :{email}});
    
    if(!userExists){
        throw new BadRequestException('wrong credencials');
    }
    const isMatch = await this.comparePasswords({password, hash:userExists.hashedPassword});
  if(!isMatch){
    throw new BadRequestException('Wrong credentials');
  }
  //sign jwt and return to the user
const token = await this.signToken({
    userid: userExists.id,
    email:userExists.email,
});
return {token};
}
async hashPassword(password : string){
    const saltOrRounds = 10;
    
  return  await bcrypt.hash(password, saltOrRounds);  
}

async comparePasswords(args:{password :string , hash:string}){
    
    
  return  await bcrypt.compare(args.password, args.hash);  
}
  async signToken(args: {userid: string,email:string }){
    const payload = args
   return this.jwt.signAsync(payload,{secret:jwtSecret})


  }
}
