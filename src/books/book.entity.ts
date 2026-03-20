import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export type BookStatus = 'want' | 'reading' | 'read';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 500, nullable: true })
  authors: string;

  @Column({ length: 20, nullable: true })
  isbn: string;

  @Column({ length: 300, nullable: true })
  publisher: string;

  @Column({ length: 20, nullable: true })
  publishedDate: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ length: 500, nullable: true })
  thumbnail: string;

  @Column({ nullable: true })
  pageCount: number;

  @Column({ type: 'enum', enum: ['want', 'reading', 'read'], default: 'want' })
  status: BookStatus;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'boolean', default: false })
  owned: boolean;

  @Column({ type: 'boolean', default: false })
  favorite: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
