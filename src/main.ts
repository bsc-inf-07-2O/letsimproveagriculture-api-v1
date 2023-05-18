import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  const config = new DocumentBuilder()
  .setTitle('LETSIMPROVEAFRICULTURE-API')
  .setDescription('Agriculture API that improve agriculture as a subject mostly in secondary school')
  .setVersion('1.0.4')
  .addTag('')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
