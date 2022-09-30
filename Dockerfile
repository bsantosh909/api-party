FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn -y

COPY . .

ENV PATH ./node_modules/.bin/:$PATH
