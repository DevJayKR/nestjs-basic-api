import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post, Put, HttpException, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) {}

	@Get()
	@UseFilters(HttpExceptionFilter)
	allCats() {
		throw new HttpException('api is broken', 401);
		return 'all Cats';
	}

	@Get('/:id')
	getCatById() {
		return 'Cat';
	}

	@Post()
	createCat() {
		return 'Create Cat';
	}

	@Put('/:id')
	updateCat() {
		return 'update cat';
	}

	@Patch('/:id')
	updatePartialCat() {
		return 'update';
	}

	@Delete(':/id')
	deleteCat() {
		return 'delete cat';
	}
}
