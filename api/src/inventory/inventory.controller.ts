import { Controller, Delete, Get, Post } from "@nestjs/common";
import { InventoryService } from "./inventory.service";

@Controller('inventory')
export class InventoryController {
    constructor(private inventoryService: InventoryService) {}

    @Get()
    getInventory(){
        return this.inventoryService.getInventory()
    }
}