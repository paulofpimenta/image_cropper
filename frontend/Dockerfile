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


# ### STAGE 1:RUN ###
# FROM node:20.13-alpine as build

# # Create folder for node modules and set node user ownership on folder
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# # Create a Virtual directory inside the docker image
# WORKDIR /home/node/app

# COPY package.json ./

# USER node

# RUN npm install

# COPY --chown=node:node . .

# RUN ng build --configuration production


# ### STAGE 2:RUN NGINX ###
# FROM nginx:latest
# COPY --from=build  /home/node/appdist/image-cropper-ui /usr/share/nginx/html
# COPY /nginx.conf  /etc/nginx/conf.d/default.conf

# EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]  