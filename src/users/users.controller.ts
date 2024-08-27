import { Controller ,Get,Param,Req,UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from '@prisma/client';
import { RolesGuard } from 'src/auth/roles.guard';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


@UseGuards(JwtAuthGuard)
@Get(':id')
 getuserbyid(@Param() params: {id:string}, @Req() req){
 return  this.usersService.getuserbyid(params.id,req);

}
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Admin)
@Get()
getusers(){
return this.usersService.getusers();
}

}
