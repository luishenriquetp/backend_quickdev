/// <reference types="multer" />
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsHistoriesService } from '../posts-histories/posts-histories.service';
export declare class PostsController {
    private readonly postsService;
    private readonly postsHistoriesService;
    constructor(postsService: PostsService, postsHistoriesService: PostsHistoriesService);
    create(userId: string, payload: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    uploadFile(file: Express.Multer.File): import("rxjs").Observable<{
        imagePath: string;
    }>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }[]>;
    findOne(userId: string, postId: string): Promise<void>;
    update(userId: string, id: string, updatePostDto: UpdatePostDto): Promise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }>;
    remove(userId: string, id: string): Promise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }>;
}
