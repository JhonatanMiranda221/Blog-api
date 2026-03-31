import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'tb_postagem' }) //Cria uma tabela chamada tb_postagem
export class Postagem {
  @PrimaryGeneratedColumn() //Cria uma chave primaria e auto inclement
  id: number;

  @IsNotEmpty()//Valida se o campo não está vazio
  @Column({length: 100, nullable: false}) //Cria uma coluna na tabela
  titulo: string;
  
  @IsNotEmpty()//Valida se o campo não está vazio
  @Column({length: 1000, nullable: false})
  texto: string;

  @UpdateDateColumn() //Cria uma coluna na tabela
  data: Date;
}
