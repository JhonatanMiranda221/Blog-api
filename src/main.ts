import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // configuraçao da aplicação nest, cria a aplicação
  process.env.TZ = '-03:00'; //configuração do timezone
  app.useGlobalPipes(new ValidationPipe()); //configuração de validade de dados de entrada;
  app.enableCors(); // habilita o cors para permitir requisições de outras origens
  await app.listen(process.env.PORT ?? 4000); // execução da aplicação nest, configuração da porta do servidor
}
bootstrap().catch((error) => {
  console.error('Erro ao iniciar aplicação:', error);
});
