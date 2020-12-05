from node:12.13

RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY src /app/src
WORKDIR /app
CMD ["node", "/app/src/app.js"]