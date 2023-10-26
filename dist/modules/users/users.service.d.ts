import { UsersRepository } from 'src/shared/database/repositories/users.reporitories';
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: UsersRepository);
    getUserById(userId: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateUser(payload: any, userId: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
