import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from 'src/shared/database/repositories/posts.repositories';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepo: PostsRepository) {}

  create(userId: string, { description, title }: CreatePostDto) {
    return this.postsRepo.create({
      data: {
        userId,
        description,
        title,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.postsRepo.findMany({
      where: { userId },
    });
  }

  findOne(userId: string, postId: string) {
    return this.postsRepo.findUnique({
      where: { id: postId, userId },
    });
  }

  async update(userId: string, postId: string, updatePostDto: UpdatePostDto) {
    const isOwner = await this.postsRepo.findFirst({
      where: {
        id: postId,
        userId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('Post not found');
    }

    return this.postsRepo.update({
      where: { id: postId },
      data: {
        ...updatePostDto,
      },
    });
  }

  async remove(userId: string, postId: string) {
    const isOwner = await this.postsRepo.findFirst({
      where: {
        id: postId,
        userId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('Post not found');
    }

    return this.postsRepo.delete({
      where: { id: postId },
    });
  }
}
