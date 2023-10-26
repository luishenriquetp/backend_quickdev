import { Injectable } from '@nestjs/common';
import { CreatePostsHistoryDto } from './dto/create-posts-history.dto';
import { PostsHistoriesRepository } from 'src/shared/database/repositories/postsHistories.repositories';

@Injectable()
export class PostsHistoriesService {
  constructor(private readonly postsHistoriesRepo: PostsHistoriesRepository) {}

  create(userId, postId, { description, title }: CreatePostsHistoryDto) {
    return this.postsHistoriesRepo.create({
      data: {
        description,
        title,
        postId,
        userId,
      },
    });
  }

  findAll() {
    return `This action returns all postsHistories`;
  }

  remove(id: number) {
    return `This action removes a #${id} postsHistory`;
  }
}
