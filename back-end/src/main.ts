import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PostService } from './post/post.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const postService = app.get(PostService);
  await postService.populatePosts();
  await app.listen(8080);
}
bootstrap();
