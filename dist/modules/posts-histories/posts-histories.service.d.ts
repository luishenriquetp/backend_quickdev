import { CreatePostsHistoryDto } from './dto/create-posts-history.dto';
import { PostsHistoriesRepository } from 'src/shared/database/repositories/postsHistories.repositories';
export declare class PostsHistoriesService {
    private readonly postsHistoriesRepo;
    constructor(postsHistoriesRepo: PostsHistoriesRepository);
    create(userId: any, postId: any, { description, title }: CreatePostsHistoryDto): import(".prisma/client").Prisma.Prisma__PostHistoriesClient<{
        id: string;
        userId: string;
        postId: string;
        title: string;
        description: string;
        edited_At: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): string;
    remove(id: number): string;
}
