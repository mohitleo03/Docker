# this is base package on which our application will run like node application require node.
FROM node:14.18.1

#define working directpry where image will be saved by docker
WORKDIR /app

#we can mention environment variables
# ENV PORT 5000

#copy package.json in working directory
COPY package.json .

#use npm install to install all dependencies before the code part copied in the image
RUN npm install

#copy code part from current directory to working directory
COPY . .

VOLUME [ "/app/node_modules" ]

#expose the container to this given port
EXPOSE 3000

#execute this command to start application
CMD [ "npm","run","dev" ]