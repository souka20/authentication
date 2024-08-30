import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '@providers/prisma.service';

@Injectable()
export class CategoriesService {
  constructor( private prisma : PrismaService){}
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }
  async  AddCategory(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;
  
    try {
      const newCategory = await this.prisma.category.create({
        data: {
         name,
        },
        
      });
      return newCategory;
    } catch (error) {
      console.error("Error creating category:", error);
      throw new Error("Unable to create category");
    }
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
