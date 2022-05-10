FROM node:alpine

ENV PORT 3000

RUN apk add --no-cache bash zsh curl wget git

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install

COPY . /usr/src/app

RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]
