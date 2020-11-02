# Reign

Technical test Reign.

## Run

Use the `docker-compose up -d` command:

```shell
docker-compose up -d
```

## API Endpoints

### General information

- All endpoints return either a JSON object or array.

### Get posts

{URL}/posts

Return posts ordered by date.

### Delete post

{URL}/posts/:id

Return post deleted.

### Populate

{URL}/posts/populate

Fetch posts from Hacker news and update database.
