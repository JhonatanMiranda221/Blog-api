import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/Postagem.controller";
import { TemaModule } from "../tema/tema.module";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],  // 
    providers: [PostagemService], 
    controllers: [PostagemController]
})
export class PostagemModule {}