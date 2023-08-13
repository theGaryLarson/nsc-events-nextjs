import { Module } from '@nestjs/common';
import { UserAuthController } from './controllers/user-auth/user-auth.controller';
import { UserAuthService } from './services/user-auth/user-auth.service';

@Module({
  controllers: [UserAuthController],
  providers: [
    {
      provide: 'USER-AUTH_SERVICE',
      useClass: UserAuthService,
    },
  ],
})
export class UserAuthModule {}
