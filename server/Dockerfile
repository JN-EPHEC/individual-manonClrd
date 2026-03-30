FROM node:20
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
# On compile le TypeScript en JavaScript
RUN npm run build
ENV PORT=3000 
# Très important !
EXPOSE 3000 
# Très important !
CMD ["node", "dist/server.js"]