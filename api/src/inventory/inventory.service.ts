import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class InventoryService {
    constructor(private prisma: PrismaService) {}

    async getInventory(){
        const inventory = await this.prisma.inventory.findMany({
            where: {locationId: 2},
            select:{
                locationId: true,
                quantity: true,
                product: {
                    select:{
                        name: true,
                        description: true,
                        price: true,
                    }

                },
                location: {
                    select:{
                        address: true,
                        city: true,
                        state: true,
                        zipCode: true,
                        createdAt: false,
                        updatedAt: false,
                    }

                }

            }
        })
        const products = inventory.flatMap((value) => (
            {
                quantity: value.quantity,
                name: value.product.name,
                description: value.product.description,
                price: value.product.price
            }
        ))

        return products;
    }
}
