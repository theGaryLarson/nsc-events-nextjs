import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UserAuthService } from '../../services/user-auth/user-auth.service';
import { SerializedAuthUser } from '../../types';
import { SerializedUser } from '../../../user/types';

@Controller('user-auth')
export class UserAuthController {
  //inject service into controller

  // pass in token from service (setup in module > provider)
  constructor(
    @Inject('USER-AUTH_SERVICE')
    private readonly userAuthService: UserAuthService,
  ) {}
  @UseInterceptors(ClassSerializerInterceptor) // removing or omitting this decorator will expose the excluded properties
  @Get('')
  getUsers() {
    const users = this.userAuthService.getUsers();
    if (users) return users.map((user) => new SerializedAuthUser(user));
    else throw new HttpException('Users not found!', HttpStatus.BAD_REQUEST);
  }
  @UseInterceptors(ClassSerializerInterceptor) // must include this decorator for Serialization
  @Get('/:username')
  getByUserName(@Param('username') username: string) {
    const user = this.userAuthService.getUserByUsername(username);
    if (user) return new SerializedAuthUser(user);
    else throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
  }
}
