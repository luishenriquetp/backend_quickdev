import { Module } from '@nestjs/common';
import { PostsHistoriesService } from './posts-histories.service';
import { PostsHistoriesController } from './posts-histories.controller';

@Module({
  controllers: [PostsHistoriesController],
  providers: [PostsHistoriesService],
})
export class PostsHistoriesModule {}
