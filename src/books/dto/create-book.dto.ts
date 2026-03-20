import { IsString, IsOptional, IsNumber, IsEnum, MaxLength } from 'class-validator';
import type { BookStatus } from '../book.entity';

export class CreateBookDto {
  @IsString()
  @MaxLength(500)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  authors?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  isbn?: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  publisher?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  publishedDate?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  thumbnail?: string;

  @IsOptional()
  @IsNumber()
  pageCount?: number;

  @IsOptional()
  @IsEnum(['want', 'reading', 'read'])
  status?: BookStatus;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  owned?: boolean;

  @IsOptional()
  favorite?: boolean;
}
