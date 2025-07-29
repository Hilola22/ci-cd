import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3030; //null va undefined tekshiradi 0 ni ham oladi
  await app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
}
bootstrap();
//lint avtomatik format