FROM node:current-alpine

COPY . .
RUN npx lerna bootstrap
RUN npm install

EXPOSE 8080
WORKDIR /server
CMD ["npm", "start"]
