import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class InventoryService {
    constructor(private prisma: PrismaService) {}

    getInventory(){
        return 'Return inventory';
    }
}