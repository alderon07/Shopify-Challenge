import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// global makes exports available to all modules
// So prisma Service is available to every module
// and they don't have to make any imports
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
