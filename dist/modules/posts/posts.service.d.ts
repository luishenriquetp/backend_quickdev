import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from 'src/shared/database/repositories/posts.repositories';
export declare class PostsService {
    private readonly postsRepo;
    constructor(postsRepo: PostsRepository);
    create(userId: string, { description, title }: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAllByUserId(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }[]>;
    findOne(userId: string, postId: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(userId: string, postId: string, updatePostDto: UpdatePostDto): Promise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }>;
    remove(userId: string, postId: string): Promise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }>;
}
