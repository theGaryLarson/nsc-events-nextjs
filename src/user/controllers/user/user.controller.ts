import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
// TODO: handle authentication here within controllers. Service layer is where business logic happens
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/search/:id')
  findUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.findUserById(id);
    if (user) return user;
    else throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
  }

  @Get('')
  getAllUsers() {
    return this.userService.getUsers();
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
