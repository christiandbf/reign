import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import PostModel from './fixtures/PostModel';
import { getModelToken } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/common';

describe('PostController', () => {
  let controller: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PostController],
      providers: [
        PostService,
        {
          provide: getModelToken('Post'),
          useValue: new PostModel()
        }
      ]
    }).compile();

    controller = module.get<PostController>(PostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
