# Docker image for testing
# It is better to host as static content on S3
FROM node:14.15.0

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g serve
RUN npm install

COPY . .
RUN npm run build

CMD [ "serve", "-s", "build", "-l", "3000" ]
