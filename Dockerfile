FROM node:alpine

ENV PORT 80

RUN apk add --no-cache bash zsh curl wget git

RUN mkdir -p /home/website
WORKDIR /home/website

RUN git config --global user.name "SPO Web Team"
RUN git config --global user.email "pas@iitk.ac.in"

RUN git clone --depth 1 https://github.com/abhishekshree/spo-website.git .

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 80

CMD [ "yarn", "start" ]
