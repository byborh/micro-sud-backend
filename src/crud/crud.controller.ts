import { Controller, Get, Body, Param, Put, Query } from '@nestjs/common';
import { CrudService } from './crud.service';
import { UpdateCrudDto } from './dto/update-crud.dto';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get()
  getMain(@Query('token') token: string) {
    return this.crudService.getMain(token)
  }

  @Get(':id')
  getPage(@Param('id') id: string, @Query('token') token: string) {
    return this.crudService.getPage(id, token);
  }

  @Put(':id')
  updatePage(@Param('id') id: string, @Body() updateCrudDto: UpdateCrudDto, @Query('token') token: string) {
    return this.crudService.updatePage(+id, updateCrudDto, token);
  }

}
