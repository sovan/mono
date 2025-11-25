import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnyService } from './any.services';

@Controller('any')
export class AnyController {
  constructor(private readonly anyServices: AnyService) {}

  @Post()
  async insertData(@Body() createData: any) {
    const dbRec = await this.anyServices.insertData(
      createData.tableName,
      createData.formValue
    );
    return dbRec;
  }

  @Get()
  async findData() {
    const dbRec = await this.anyServices.findAll('emp');
    return dbRec;
  }
}
