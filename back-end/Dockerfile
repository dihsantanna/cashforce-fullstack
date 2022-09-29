FROM node:16-alpine AS prod-env
EXPOSE 3001
WORKDIR /app/backend
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT [ "npm", "start" ]