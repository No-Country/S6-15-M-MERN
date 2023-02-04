FROM node:16

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE 3000

#CMD [ "npm", "run", "dev"]
CMD [ "npm", "start"]
