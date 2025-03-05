import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsHistoriesService } from '../posts-histories/posts-histories.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsHistoriesService],
})
export class PostsModule {}
