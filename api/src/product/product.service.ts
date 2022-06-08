import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto, UpdateProductDto } from './dto';

@Injectable()
export class ProductService {
    // make prisma service to query database
    constructor(private prisma: PrismaService) {}
    
    async createProduct(dto: ProductDto){
        // create product
        try {
            const product = await this.prisma.product.create({
                data: {
                    name: dto.name,
                    description: dto.description,
                    price: dto.price,
                },
                // select only returns the value with true in response
                // select: {
                //     name: true,
                //     price: true,
                // }
            })
            return product
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                // tried to create a new record with unique key
                if(error.code === 'P2001'){
                    throw new ForbiddenException(
                        'Duplicate product name',
                    );
                }
            }

            throw error;
        }
    }

    async updateProduct(id: number, dto: UpdateProductDto) {
        try {
            const product = this.prisma.product.update({
                where: {
                    id: id,
                },
                data: {
                    name: dto.name,
                    description: dto.name,
                    price: dto.price,
                },
            })
            return product;
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === "P2001"){
                    throw new ForbiddenException(
                        'Product does not exist',
                    );
                }
            }
            throw error;
        }
    }

    async deleteProduct(id: number){
        try {
            const product = await this.prisma.product.delete({
                where: {
                    id,
                }
            })
            return product;
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === "P2025"){
                    throw new ForbiddenException(
                        "Product not found. So, we cannot perform the deletion."
                    )
                }
            }
            console.log(error)
            throw error
        }
    }

    async getProduct(id: number){
        try {
            const product = await this.prisma.product.findUnique({
                where: {
                    id,
                }
            })          
            console.log(product)
            return product;
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                throw error
            }
            console.log(error)
            throw error
        }   
    }
}
