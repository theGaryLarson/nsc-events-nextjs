import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { SerializedUser } from '../../types';
// TODO: handle authentication here within controllers. Service layer is where business logic happens
@Controller('user')
export class UserController {
  constructor(@Inject('USER_SERVICE') private userService: UserService) {}
  @Get('/search/:id')
  findUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.findUserById(id);
    if (user) return user;
    else throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
  }

  @UseInterceptors(ClassSerializerInterceptor) // must include this decorator for Serialization
  @Get('')
  getAllUsers() {
    const users = this.userService.getUsers();
    if (users) return users.map((user) => new SerializedUser(user));
    else throw new HttpException('Users not found!', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe) // using nest validation from dto
  createUser(@Body() createUserDto: CreateUserDto) {
    // DTO data transfer object (schema) use classes rather than interfaces.
    // es6 standard doesn't have interfaces they are lost at compile time. So they cannot be referenced
    // during run time. Some things work fine but others will not work. (e.g. pipes)
    this.userService.createUser(createUserDto);
  }
}
