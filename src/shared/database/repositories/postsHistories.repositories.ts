import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsHistoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.PostHistoriesFindManyArgs) {
    return this.prismaService.postHistories.findMany(findManyDto);
  }

  findUnique(findUniqueDto: Prisma.PostHistoriesFindUniqueArgs) {
    return this.prismaService.postHistories.findUnique(findUniqueDto);
  }

  create(createDto: Prisma.PostHistoriesCreateArgs) {
    return this.prismaService.postHistories.create(createDto);
  }
}
