import { HttpService, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostService {
    constructor(
        @InjectModel('Post') private readonly postModel: Model<Post>,
        private readonly httpService: HttpService
    ) { }

    async getPosts(): Promise<Post[]> {
        const posts = await this.postModel
            .find({
                deletedAt: null
            })
            .sort({
                date: -1
            });
        return posts;
    }

    async deletePost(postId: number): Promise<Post> {
        const postDeleted = await this.postModel.findOneAndUpdate({ id: postId }, { deletedAt: new Date() });
        return postDeleted;
    }

    async populatePosts(): Promise<void> {
        const response = await this.httpService.get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs')
            .toPromise();
        const { hits } = response.data;
        for (const hit of hits) {
            if (!hit.story_title && !hit.title) continue;
            if (!hit.story_id) continue;
            const hasBeenSaved = await this.postModel.exists({ id: hit.story_id });
            if (hasBeenSaved) continue;
            const post = new this.postModel({
                id: hit.story_id,
                title: hit.title,
                storyTitle: hit.story_title,
                author: hit.author,
                url: hit.url || hit.story_url,
                date: hit.created_at
            });
            await post.save();
        }
    }
}
