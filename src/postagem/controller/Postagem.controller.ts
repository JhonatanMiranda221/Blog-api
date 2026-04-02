import {
    Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from '../services/postagem.service';

//Porta de entrada,
// Recebe a requisição HTTP, valida os dados de entrada,
// e chama o Service. Não tem lógica de negócio aqui.
@Controller('/Postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

@Get('/:id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.findById(id);
  }
@Get('/titulo/:titulo')
@HttpCode(HttpStatus.OK)
  findAllByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
    return this.postagemService.findAllByTitulo(titulo);
}

@Post()
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return
  }
@Put()
@HttpCode(HttpStatus.OK)
update (@Body() postagem: Postagem ): Promise<Postagem> {
  return this.postagemService.update(postagem)
}
}
