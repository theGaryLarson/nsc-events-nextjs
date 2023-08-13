import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  street1: string;
  street2?: string;
  @IsNotEmpty()
  zip: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  state: string;
}
