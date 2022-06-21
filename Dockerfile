FROM node:14.17.0-alpine as builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM node:14.17.0-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY package*.json ./

RUN npm ci --only=production

RUN mkdir output-specs

CMD npm run start:prod