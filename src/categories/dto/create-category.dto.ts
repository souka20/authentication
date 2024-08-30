import { IsNotEmpty,IsString,IsNumber,IsPositive} from "class-validator"
export class CreateCategoryDto {


    @IsNotEmpty()
    @IsString()
    public name: string 

   
}
