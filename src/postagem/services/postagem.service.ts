import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { TemaService } from "../../tema/services/tema.service";
import { Postagem } from "../entities/postagem.entity";

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>,
        private temaService:TemaService
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            relations:{
                tema: true
            }
        });
    }

    async findById(id: number): Promise<Postagem> {

        let postagem = await this.postagemRepository.findOne({
            where: {
                id
            },
            relations:{
                tema: true
            }
        });

        if (!postagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return postagem;
    }

    async findAllByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                tema: true
            }
        })
    }

    /*async create(postagem: Postagem): Promise<Postagem> {
        await this.temaService.findById(postagem.tema.id)
        return await this.postagemRepository.save(postagem);
    }
*/
async create(postagem: Postagem): Promise<Postagem> {
       
        if (postagem.tema != null) {
           
            let tema = await this.temaService.findById(postagem.tema.id)
 
            if (!tema)
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
 
              return await this.postagemRepository.save(postagem);
        }else{
            throw new HttpException('Tema nao pode ser nulo!', HttpStatus.NOT_FOUND);
        }
   
    }

   /* async update(postagem: Postagem): Promise<Postagem> {
        
        await this.temaService.findById(postagem.tema.id)
        await this.findById(postagem.id);
        
        return await this.postagemRepository.save(postagem);
    }
*/
async update(postagem: Postagem): Promise<Postagem> {
       
        let buscaPostagem: Postagem = await this.findById(postagem.id);
 
        if (!buscaPostagem || !postagem.id)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
 
        if (postagem.tema){
           
            let tema = await this.temaService.findById(postagem.tema.id)
               
            if (!tema)
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
               
            return await this.postagemRepository.save(postagem);
   
        }else{
            throw new HttpException('Tema nao pode ser nulo!', HttpStatus.NOT_FOUND);
        }
       
    }
    async delete(id: number): Promise<DeleteResult> {
        
        await this.findById(id);

        return await this.postagemRepository.delete(id);

    }

}