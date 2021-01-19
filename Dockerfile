FROM node:current-alpine

COPY . .
RUN npx lerna bootstrap
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
