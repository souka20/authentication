import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
//import { AuthController } from './auth/auth.controller';

import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [AuthModule,PrismaModule,JwtModule],

})
export class AppModule {}
