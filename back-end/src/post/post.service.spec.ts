import { HttpModule } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import PostModel from './fixtures/PostModel';

describe('PostService', () => {
  let service: PostService;
  let postModel: PostModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        PostService,
        {
          provide: getModelToken('Post'),
          useValue: new PostModel()
        }
      ],
    }).compile();

    service = module.get<PostService>(PostService);
    postModel = module.get<PostModel>(PostModel);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Get posts ordered by date', async () => {
    const response = [{ id: 1 }];
    postModel.sort.mockResolvedValue(response);

    const posts = await service.getPosts();

    expect(posts).toStrictEqual(response);
    expect(postModel.find).toBeCalledWith({ deletedAt: null });
    expect(postModel.sort).toBeCalledWith({ date: -1 });
  });

  it('Delete post by id', async () => {
    const postId = 1;
    const response = { id: postId };
    postModel.findOneAndUpdate.mockResolvedValue(response);
    const spy = jest.spyOn(global, 'Date');

    const post = await service.deletePost(postId);

    const date = spy.mock.instances[0];
    expect(post).toStrictEqual(response);
    expect(postModel.findOneAndUpdate).toBeCalledWith({ id: postId }, { deletedAt: date });
  });
});
