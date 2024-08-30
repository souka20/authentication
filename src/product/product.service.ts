import { Injectable } from '@nestjs/common';
import { PaginatedResult , PaginateFunction, paginator  } from 'prisma/paginator';
import {Product, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
@Injectable()
export class ProductService {
    constructor( private prisma :PrismaService){}



  /*async AddProduct(createProductDto: CreateProductDto) {
   const { title , description , price } = createProductDto;
    return   await this.prisma.product.create( {data :createProductDto });
     
  }*/

  async  AddProduct(createProductDto: CreateProductDto) {
    const { title, description, price,categoryId } = createProductDto;
  
    try {
      const newProduct = await this.prisma.product.create({
        data: {
          title,
          description,
          price,
          category: {
            connect: { id: categoryId }, // Ensure the category is connected
          },
        },
        include: {
          category: true, // Include the category data in the result
        },
      });
  
      return {
        ...newProduct,
        categoryName: newProduct.category.name, // Add category name to the result
      };
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Unable to create product");
    }
  }


  async findAll({
    productTitle = '',
    page = 1,
    offset = 4,
  }:FindProductDto):Promise<Product[]>{

    const productsToSkip = (page - 1)*offset;
    return this.prisma.product.findMany({
      skip: productsToSkip,
      take: offset,
      where: {
  title:{ contains:productTitle, mode:'insensitive'},
},
orderBy: { title:'asc'},

    });
  } 
  

    
  
  

  async findOne(id: string) {
    return this.prisma.product.findUnique({where: {id},
    
      
      
    });
  }

  async update(id: string , updateProductDto: Prisma.ProductUpdateInput) {
   return this.prisma.product.update({where:{

    id,},
    data: updateProductDto,
   })
  }

  async remove(id: string) {
    return this.prisma.product.delete({where:{id }
});
  }

}