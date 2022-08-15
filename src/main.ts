import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = 8000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
    Logger.log(`http://localhost:${port}`, 'App Running');
}

bootstrap();
