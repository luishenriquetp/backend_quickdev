import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.reporitories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  getUserById(userId: string) {
    return this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
      },
    });
  }

  updateUser(payload, userId: string) {
    return this.usersRepo.update({
      where: { id: userId },
      data: payload,
    });
  }
}
