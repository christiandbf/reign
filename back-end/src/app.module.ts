import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/posts', {
      useNewUrlParser: true,
      useFindAndModify: false
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
