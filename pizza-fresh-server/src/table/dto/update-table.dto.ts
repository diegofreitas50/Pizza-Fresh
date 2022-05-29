import { PartialType } from '@nestjs/swagger';
import { CreateTableDto } from './crate-table.dto';

export class UpdateTableDto extends PartialType(CreateTableDto) {}
