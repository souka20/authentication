import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
//import { AuthController } from './auth/auth.controller';

import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { RolesGuard } from './auth/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { ProductModule } from './product/product.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [AuthModule,PrismaModule,JwtModule, UsersModule,ProductModule, CategoriesModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
