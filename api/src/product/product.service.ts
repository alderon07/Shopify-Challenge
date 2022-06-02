import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto';

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
                if(error.code === 'P2002'){
                    throw new ForbiddenException(
                        'Duplicate product name',
                    );
                }
            }

            throw error;
        }
    }

    async updateProduct(){
    return "Product Updated"
    }

    async deleteProduct(){
        return "Product deleted"
    }

    async getProduct(){
        return "Product returned"
    }
}
