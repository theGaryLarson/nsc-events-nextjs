import { Exclude } from 'class-transformer';

export interface UserAuth {
  username: string;
  password: string;
}

// see serialization under Techniques in the docs
export class SerializedAuthUser {
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedAuthUser>) {
    Object.assign(this, partial);
  }
}
