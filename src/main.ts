import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const appOptions = {cors: true};
  const app = await NestFactory.create(ApplicationModule, appOptions);
  const configService = app.get(ConfigService);
  const port = configService.get('HTTP_PORT');
  const basePath = '/api';
  app.setGlobalPrefix(basePath);

  const options = new DocumentBuilder()
    .setTitle('RISNODE-ADMIN')
    .setDescription('The Riantis Node API description')
    .setVersion('1.0')
    .addServer(basePath)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(port);
}
bootstrap();