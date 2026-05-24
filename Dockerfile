FROM node:24
WORKDIR /app

COPY . .

EXPOSE 5173
CMD [ "npm", "run", "dev", "--host"]