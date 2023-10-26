import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class PostsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany(findManyDto: Prisma.PostFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }[]>;
    findFirst(findFirstDto: Prisma.PostFindFirstArgs): Prisma.Prisma__PostClient<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique(findUniqueDto: Prisma.PostFindUniqueArgs): Prisma.Prisma__PostClient<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createDto: Prisma.PostCreateArgs): Prisma.Prisma__PostClient<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateDto: Prisma.PostUpdateArgs): Prisma.Prisma__PostClient<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(deleteDto: Prisma.PostDeleteArgs): Prisma.Prisma__PostClient<{
        id: string;
        userId: string;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        viewsCount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
