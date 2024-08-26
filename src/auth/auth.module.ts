import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';
import { PassportModule } from '@nestjs/passport';
 @Module({
  imports:[PrismaModule,PassportModule,JwtModule.register({
    
    global : true,
    secret:jwtSecret,
    signOptions:{expiresIn: '60s'},
  })],
  controllers: [AuthController],
  providers: [AuthService],


})
export class AuthModule {}
