import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.reporitories';
import { PostsRepository } from './repositories/posts.repositories';
import { PostsHistoriesRepository } from './repositories/postsHistories.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    PostsRepository,
    PostsHistoriesRepository,
  ],
  exports: [UsersRepository, PostsRepository, PostsHistoriesRepository],
})
export class DatabaseModule {}
