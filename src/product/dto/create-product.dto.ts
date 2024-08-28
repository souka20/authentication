import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator"

export class CreateProductDto {


    @IsNotEmpty()
    @IsString()
    public title: String 
    
    @IsNotEmpty()
    @IsString()
    public description: String 

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    public price:number
}
