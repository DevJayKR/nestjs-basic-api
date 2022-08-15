import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post, Put, HttpException, UseFilters, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/pipes/positiveInt.pite';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
	constructor(private readonly catsService: CatsService) {}

	@Get()
	allCats() {
		console.log('hello controller');
		return { cats: 'get all cat api' };
	}

	@Get('/:id')
	getCatById(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
		// console.log(param);
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
