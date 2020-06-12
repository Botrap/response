import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { } from '@nestjs/swagger';


import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './config/database.config';


async function bootstrap() {
  const appOptions = {cors: true};
  const app = await NestFactory.create(AppModule, appOptions);

  //const configService = app.get(ConfigService);
  const port = app.get('ConfigService')['HTTP_PORT'];
  console.log(`Ports is ${port}!`);
  console.log(port);

  
  const basePath = 'api';
  //const basePath = '/api';
  app.setGlobalPrefix(basePath);

  const options = new DocumentBuilder() 
    .setTitle('RisNode Admin')
    .setDescription('The Riantis Node API description')
    .setVersion('1.0.0')
    //.addServer(basePath)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();