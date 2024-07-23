import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudDto } from './create-crud.dto';

export class UpdateCrudDto extends PartialType(CreateCrudDto) {
    name: string;
    elements: Array<{
      id: number;
      type: string;
      order: number;
      content: string;
      title: string;
      caption: string;
    }>;
}