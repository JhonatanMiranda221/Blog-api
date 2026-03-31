import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //type of database
      host: 'localhost', // host of database
      port: 3306, // port of database
      username: 'root', // username of database
      password: 'root', // password of database
      database: 'db_blogpessoal', // name of database
      entities: [Postagem], // entities of database
      synchronize: true, // synchronize database
    }),
    PostagemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
}) // conectar o banco de dados
export class AppModule {}
