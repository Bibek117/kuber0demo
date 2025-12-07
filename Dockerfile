#base image
FROM node:22-alpine AS base
WORKDIR /app

#install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

#copy source code
COPY . .

#run as non root
USER node
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]