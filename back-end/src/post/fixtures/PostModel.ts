export default class PostModel {
    find = jest.fn().mockReturnThis();
    sort = jest.fn().mockReturnThis();
    findOneAndUpdate = jest.fn().mockReturnThis();
}