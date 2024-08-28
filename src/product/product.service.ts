import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
      
       
@Injectable()
export class ProductService {
    constructor( private prisma :PrismaService){}
  async AddProduct(createProductDto: Prisma.ProductCreateInput) {
   
    return await this.prisma.product.create({data:createProductDto});
     
  }

  async findAll() {
    return  this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({where: {id},
    
      
      
    });
  }

  update(id: string , updateProductDto: Prisma.ProductUpdateInput) {
   return this.prisma.product.update({where:{

    id,},
    data: updateProductDto,
   })
  }

  remove(id: string) {
    return this.prisma.product.delete({where:{id }
});
  }

}