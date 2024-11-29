FROM node:20.13.1-alpine3.20 AS base

FROM base AS build-stage

WORKDIR /app/
COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM base
WORKDIR /app/
COPY --from=build-stage /app/.output/ /app/
COPY .env /app/ 

CMD [ "node", "./server/index.mjs" ]
