import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { User } from '../../types';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      email: 'gary@mail.com',
      name: 'Gary',
    },
    {
      id: 2,
      email: 'taylor@mail.com',
      name: 'Taylor',
    },
    {
      id: 3,
      email: 'robel@mail.com',
      name: 'Robel',
    },
  ];
  findUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  @UsePipes(ValidationPipe)
  createUser(userDto: CreateUserDto) {
    this.users.push(userDto);
  }

  getUsers() {
    return this.users;
  }
}
