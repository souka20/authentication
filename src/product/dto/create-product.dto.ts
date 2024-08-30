import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator"

export class CreateProductDto {


    @IsNotEmpty()
    @IsString()
    public title: string 
    
    @IsNotEmpty()
    @IsString()
    public description: string 

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    public price:number

    public categoryId:number
}
