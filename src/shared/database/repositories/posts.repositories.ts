import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.PostFindManyArgs) {
    return this.prismaService.post.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.PostFindFirstArgs) {
    return this.prismaService.post.findFirst(findFirstDto);
  }

  findUnique(findUniqueDto: Prisma.PostFindUniqueArgs) {
    return this.prismaService.post.findUnique(findUniqueDto);
  }

  create(createDto: Prisma.PostCreateArgs) {
    return this.prismaService.post.create(createDto);
  }

  update(updateDto: Prisma.PostUpdateArgs) {
    return this.prismaService.post.update(updateDto);
  }

  delete(deleteDto: Prisma.PostDeleteArgs) {
    return this.prismaService.post.delete(deleteDto);
  }
}
