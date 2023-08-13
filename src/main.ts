import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // set this it makes it easier setting up web server
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
