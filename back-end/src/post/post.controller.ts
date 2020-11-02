import { Controller, Delete, Get, Logger, Param, Post } from '@nestjs/common';
import { Post as PostInterface } from './interfaces/post.interface';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    private readonly logger = new Logger(PostController.name);

    constructor(
        private readonly postService: PostService
    ) { }

    @Get('/')
    async getPosts(): Promise<PostInterface[]> {
        const posts = await this.postService.getPosts();
        return posts;
    }

    @Delete('/:id')
    async deletePost(@Param('id') id: number): Promise<PostInterface> {
        const post = await this.postService.deletePost(id);
        return post;
    }

    @Post('/populate')
    async populatePosts(): Promise<void> {
        await this.postService.populatePosts();
    }
}
