import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JWT_SECRET, SERVER_PORT } from './config/constans';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>(SERVER_PORT),10)|| 3000;

  const secret = config.get<string>(JWT_SECRET);
  logger.log(secret);
  initSwagger(app);

    app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(port);

}
bootstrap();
