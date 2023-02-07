# FROM node:16

# RUN mkdir -p /home/app

# COPY . /home/app

# WORKDIR /home/app

# RUN npm install

# EXPOSE 3000

#RUN npm run build
#CMD [ "npm", "run", "dev"]
#CMD [ "npm", "start"]
# RUN cd dist
# CMD [ "ls", "dist" ]

FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]