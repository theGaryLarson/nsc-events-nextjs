import { Injectable } from '@nestjs/common';
import { UserAuth } from '../../types';

@Injectable()
export class UserAuthService {
  private users: UserAuth[] = [
    {
      username: 'abel',
      password: 'abel',
    },
    {
      username: 'ben',
      password: 'ben',
    },
    {
      username: 'carla',
      password: 'carla',
    },
    {
      username: 'dwayne',
      password: 'dwayne',
    },
  ];

  getUsers() {
    // once we exclude the password in user-auth/types/index.ts
    // we map to the SerializedUser class to omit the password

    // can also use the constructor partial as well rather than use plainToClass
    return this.users;
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
