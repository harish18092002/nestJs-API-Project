import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './app.service';
import { AmountService } from './Amount/amount.service';
import { AmountController } from './Amount/amount.controller';

@Module({
    imports: [PrismaModule],
    controllers: [AppController, AmountController],
    providers: [AppService, PrismaService, AmountService],
})
export class AppModule {}
