/*
 * @Author: 狗蛋<pup.com>
 * @Date: 2024-08-15 10:54:25
 * @LastEditors: 狗蛋<pup.com>
 * @LastEditTime: 2024-08-15 10:55:12
 * @Description: InternalizationModule
 */
import { Module } from '@nestjs/common';

import { PrismaModule } from '@/modules/prisma/prisma.module';
import { OperationLogModule } from '@/modules/system-manage/operation-log/operation-log.module';

import { InternalizationController } from './internalization.controller';
import { InternalizationService } from './internalization.service';

@Module({
  imports: [PrismaModule, OperationLogModule],
  controllers: [InternalizationController],
  providers: [InternalizationService],
  exports: [InternalizationService],
})
export class InternalizationModule { }
