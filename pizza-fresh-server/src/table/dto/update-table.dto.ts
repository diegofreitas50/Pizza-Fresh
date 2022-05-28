import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './crate-table.dto';

export class UpdateTableDto extends PartialType(CreateTableDto) {}
