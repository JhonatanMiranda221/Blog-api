import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import {PostagemController} from "./controller/Postagem.controller"
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], // importa o Postagem como uma Entidade 
    providers: [PostagemService], //Define o PostagemService como um provedor
    controllers: [PostagemController],
    exports: [TypeOrmModule] // exporta o TypeOrmModule
})
export class PostagemModule {}