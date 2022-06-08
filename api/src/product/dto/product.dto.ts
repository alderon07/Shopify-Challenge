import { IsString, IsPositive, IsOptional, IsNotEmpty, IsNumberString } from 'class-validator';

// use pipes to apply data validation on dtos using class-validator
// and class-transformer
export class ProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumberString()
  @IsNotEmpty()
//   @IsPositive()
  price: number;
}
