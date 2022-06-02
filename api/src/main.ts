import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // add to make pipes work
  app.useGlobalPipes(new ValidationPipe({
    // makes sure no extra data is passed in through requests
    whitelist: true,
  }))
  await app.listen(3333);
}
bootstrap();
