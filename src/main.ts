import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Simple Board')
    .setDescription('The Simple Board API description')
    .setVersion('1.0')
    .addTag('Board') // addtag는 controller와 연동(맵핑)됨으로, 
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
