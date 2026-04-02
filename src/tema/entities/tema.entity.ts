import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: "tb_temas"})
export class Tema {
    constructor(descricao: string, id: number, postagem:Postagem[]) {
        this.descricao = descricao;
        this.id = id;
        this.postagem = postagem
    }

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string

    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
    
}