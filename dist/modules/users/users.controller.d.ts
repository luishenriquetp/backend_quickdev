import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(userId: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(userId: any, payload: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
