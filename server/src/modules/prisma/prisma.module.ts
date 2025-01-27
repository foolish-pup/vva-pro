/*
 * @Author: 狗蛋<pup.com>
 * @Date: 2024-07-10 13:47:29
 * @LastEditors: 狗蛋<pup.com>
 * @LastEditTime: 2024-07-10 13:47:40
 * @Description: PrismaModule
 */
import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule { }
