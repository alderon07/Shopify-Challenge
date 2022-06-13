import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const options = {
  //   "origin": '*', 
  //   "methods": ['GET', 'POST', 'UPDATE', 'PUT', 'DELETE'],
  //   "allowedHeaders": ['Content-type']
  //   // "preflightContinue": false,
  //   // "optionsSuccessStatus": 204
  // };
  app.enableCors()
  app.setGlobalPrefix("api")
  // add to make pipes work
  app.useGlobalPipes(new ValidationPipe({
    // makes sure no extra data is passed in through requests
    whitelist: true,
  }))
  
  await app.listen(3333);
}
bootstrap();
