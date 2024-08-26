import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
//import { AuthController } from './auth/auth.controller';

import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AuthModule,PrismaModule,JwtModule, UsersModule],

})
export class AppModule {}
