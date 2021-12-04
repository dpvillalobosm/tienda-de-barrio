FROM node:16-alpine3.14
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install -g npm@8.1.4
RUN npm install
RUN npm run build
EXPOSE 9002
CMD [ "npm", "start" ]