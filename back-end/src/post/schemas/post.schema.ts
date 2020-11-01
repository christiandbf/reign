import { Schema } from 'mongoose';

export const PostSchema = new Schema({
    id: Number,
    title: String,
    storyTitle: String,
    author: String,
    url: String,
    date: Date,
    deletedAt: Date
});
