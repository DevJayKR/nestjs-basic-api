import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = 8000;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(new HttpExceptionFilter());
	await app.listen(port);
	Logger.log(`http://localhost:${port}`, 'App Running');
}

bootstrap();
