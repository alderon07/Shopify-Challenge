import { Body, Controller, Delete, Get, Post, Param, ParseIntPipe, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto, UpdateProductDto } from './dto';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('create')
    creatProduct(@Body() dto: ProductDto){
        console.log({
            dto,
        });
        return this.productService.createProduct(dto)
    }

    @Put(':id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto){
        return this.productService.updateProduct(id, dto)
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number){
        return this.productService.deleteProduct(id)
    }

    @Get()
    getAll(){
        return this.productService.getAllProducts()
    }

}
