import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ActiveUserId } from 'src/shared/decorators/activeUserId';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';
import * as path from 'path';
import { of } from 'rxjs';
import { PostsHistoriesService } from '../posts-histories/posts-histories.service';

const storage = {
  storage: diskStorage({
    destination: '../../uploads',
    filename: (req, file, cb) => {
      const randomString: string = randomUUID().replace(/-/g, '');
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, ' ') + randomString;
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly postsHistoriesService: PostsHistoriesService,
  ) {}

  @Post()
  create(@ActiveUserId() userId: string, @Body() payload: CreatePostDto) {
    return this.postsService.create(userId, payload);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return of({ imagePath: file.filename });
  }

  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.postsService.findAllByUserId(userId);
  }

  @Get(':postId')
  async findOne(
    @ActiveUserId() userId: string,
    @Param('postId') postId: string,
  ) {
    const post = await this.postsService.findOne(userId, postId);

    if (!post) throw new NotFoundException('Post not found');

    this.postsService.update(userId, postId, {
      description: post.description,
      title: post.title,
      viewsCount: post.viewsCount + 1,
    });
  }

  @Put(':postId')
  async update(
    @ActiveUserId() userId: string,
    @Param('postId') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    await this.postsHistoriesService.create(userId, id, updatePostDto);

    return this.postsService.update(userId, id, updatePostDto);
  }

  @Delete(':postId')
  remove(@ActiveUserId() userId: string, @Param('postId') id: string) {
    return this.postsService.remove(userId, id);
  }
}
