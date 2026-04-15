import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule); // configuraçao da aplicação nest, cria a aplicação
  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Generation Brasil","http://www.generationbrasil.online","generation@email.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  process.env.TZ = '-03:00'; //configuração do timezone
  app.useGlobalPipes(new ValidationPipe()); //configuração de validade de dados de entrada;
  app.enableCors(); // habilita o cors para permitir requisições de outras origens
  await app.listen(process.env.PORT ?? 4000); // execução da aplicação nest, configuração da porta do servidor
}
bootstrap();

