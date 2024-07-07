import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudDto } from './create-crud.dto';

export class UpdateCrudDto extends PartialType(CreateCrudDto) {
    name : string;
    elements: {
        id: number;
        type: string;
        order: number;
        content?: string;
        url?: string;
        title?: string;
        text?: string;
        caption?: string;
    }[]
}
