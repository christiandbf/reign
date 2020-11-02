FROM node:14.15.0 as development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:14.15.0 as production

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/build ./build

RUN npm install -g serve

CMD [ "serve", "-s", "build", "-l", "3000" ]
