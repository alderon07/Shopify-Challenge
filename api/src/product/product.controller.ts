import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('createProduct')
    creatProduct(@Body() dto: ProductDto){
        console.log({
            dto,
        });
        return this.productService.createProduct(dto)
    }

    @Post('updateProduct')
    updateProduct(){
        return this.productService.updateProduct()
    }

    @Delete('deleteProduct')
    deleteProduct(){
        return this.productService.deleteProduct()
    }

    @Get('getProduct')
    getProduct(){
        return this.productService.getProduct()
    }

}
