import { IsNumberString, IsString, ValidateIf, ValidationOptions } from "class-validator";

export class UpdateProductDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    price?: number;
}

function IsOptional(validationOptions?: ValidationOptions) {
    return ValidateIf((obj, value) => {
      return value !== null && value !== undefined && value !== '';
    }, validationOptions);
  }