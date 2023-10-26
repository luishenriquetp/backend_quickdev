import { PartialType } from '@nestjs/mapped-types';
import { CreatePostsHistoryDto } from './create-posts-history.dto';

export class UpdatePostsHistoryDto extends PartialType(CreatePostsHistoryDto) {}
