FROM node:16-alpine

RUN apk --update --no-cache add curl

WORKDIR /app/frontend

EXPOSE 8080

COPY package*.json ./

RUN npm install --silent

COPY ./ ./

CMD [ "npm", "run", "serve" ]