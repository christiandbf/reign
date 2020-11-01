import { Document } from "mongoose";

export class Post extends Document {
    readonly id: number;
    readonly title: string;
    readonly storyTitle: string;
    readonly author: string;
    readonly url: string;
    readonly date: Date;
}
