import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Mussarela',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do produto',
    example:
      'Massa farinha tipo 0, Molho de tomate fresco, Mussarela importada',
  })
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({
    description: 'Preço do produto',
    example: 20.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do produto',
    example:
      'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-mussarela-1.jpg',
  })
  image: string;
}
