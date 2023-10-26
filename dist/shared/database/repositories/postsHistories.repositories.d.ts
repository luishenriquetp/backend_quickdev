import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class PostsHistoriesRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany(findManyDto: Prisma.PostHistoriesFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        userId: string;
        postId: string;
        title: string;
        description: string;
        edited_At: Date;
    }[]>;
    findUnique(findUniqueDto: Prisma.PostHistoriesFindUniqueArgs): Prisma.Prisma__PostHistoriesClient<{
        id: string;
        userId: string;
        postId: string;
        title: string;
        description: string;
        edited_At: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createDto: Prisma.PostHistoriesCreateArgs): Prisma.Prisma__PostHistoriesClient<{
        id: string;
        userId: string;
        postId: string;
        title: string;
        description: string;
        edited_At: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
