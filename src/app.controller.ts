import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  List() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: any){

    const { recipientID, content, category} = body

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientID

      },
    })
  }

}
