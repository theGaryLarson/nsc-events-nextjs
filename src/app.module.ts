import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { UserAuthModule } from './user-auth/user-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nsc-events'),
    UserModule,
    UserAuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
