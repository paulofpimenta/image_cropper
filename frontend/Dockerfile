### STAGE 1:RUN ###
FROM node:20.13-alpine as build

# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app

# Run command in Virtual directory
RUN npm cache clean --force

COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build --configuration production

### STAGE 2:RUN ###
FROM nginx as ngi
COPY --from=build /dist/src/app/dist/image-cropper-ui /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80