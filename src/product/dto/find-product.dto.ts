import { Type } from "class-transformer";
import { IsOptional, IsPositive, IsString ,IsInt} from "class-validator";

export class FindProductDto {
    
    
    @IsOptional()
    @IsString()
    productTitle?:string;
    



    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @IsPositive()
    page?:number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @IsPositive()
    offset?:number;
}