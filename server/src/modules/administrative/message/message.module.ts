/*
 * @Author: 狗蛋<pup.com>
 * @Date: 2024-09-02 16:10:16
 * @LastEditors: 狗蛋<pup.com>
 * @LastEditTime: 2024-09-02 16:10:27
 * @Description: MessageModule
 */
import { Module } from '@nestjs/common';

import { PrismaModule } from '@/modules/prisma/prisma.module';
import { OperationLogModule } from '@/modules/system-manage/operation-log/operation-log.module';

import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [PrismaModule, OperationLogModule],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule { }
