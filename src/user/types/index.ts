import { Exclude } from 'class-transformer';

export interface User {
  id: number;
  email: string;
  name: string;
}

export class SerializedUser {
  id: number;
  name: string;

  @Exclude()
  email: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
