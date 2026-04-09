import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import {Tema} from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module'; 
import { AuthModule } from './auth/auth.module'
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //type of database
      host: 'localhost', // host of database
      port: 3306, // port of database
      username: 'root', // username of database
      password: 'root', // password of database
      database: 'db_blogpessoal', // name of database
      entities: [Postagem, Tema, Usuario], // entities of database
      synchronize: true, // synchronize database
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
}) // conectar o banco de dados
export class AppModule {}
