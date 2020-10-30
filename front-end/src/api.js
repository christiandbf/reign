export const getPosts = async () => {
    return Promise.resolve([
        {
            url: 'https://www.google.com',
            title: 'A title',
            storyTitle: 'A story title',
            author: 'Christian Barrios',
            date: '2020-10-30T17:00:01.370Z',
            id: 1
        },
        {
            url: 'https://www.google.com',
            title: null,
            storyTitle: 'A story title',
            author: 'Christian Barrios',
            date: '2020-10-29T21:00:01.370Z',
            id: 2
        },
        {
            url: 'https://www.google.com',
            title: '',
            storyTitle: 'A story title 3',
            author: 'Christian Barrios',
            date: '2020-10-28T21:00:01.370Z',
            id: 3
        }
    ]);
};

export const deletePost = async id => {
    console.log(id);
    await Promise.resolve();
};