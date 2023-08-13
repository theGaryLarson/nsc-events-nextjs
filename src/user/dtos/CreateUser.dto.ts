// added npm i class-validator class-transformer
// for nest validation. Address added to demo validation of nested objects
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreatAddress.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsNotEmpty() // can remove this to make this object optional
  address: CreateAddressDto;
}
