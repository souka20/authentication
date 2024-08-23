import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
 @Module({
  imports:[PrismaModule,JwtModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthModule],

})
export class AuthModule {}
