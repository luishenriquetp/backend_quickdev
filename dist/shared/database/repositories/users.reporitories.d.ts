import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class UsersRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.UserCreateArgs): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findByEmail(email: string): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique(findUniqueDto: Prisma.UserFindUniqueArgs): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateDto: Prisma.UserUpdateArgs): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
