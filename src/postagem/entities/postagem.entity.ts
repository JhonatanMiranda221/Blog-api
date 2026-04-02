import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity"

@Entity({name: "tb_postagens"})
export class Postagem {

  constructor(id: number, titulo: string, texto: string, data: Date, tema: Tema) {
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
        this.data = data;
        this.tema = tema;
    }
    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string

    @UpdateDateColumn()
    data: Date
    
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

}