### STAGE 1:BUILD FRONT WITH NODE ###
FROM node:alpine AS builder

# Create (if it doesnt exists) a virtual directory inside the docker image. 
# Commands such as COPY, RUN, etc will be done here
WORKDIR /front

# Copy all folder to working directory
COPY . .

# Install and run. Check angular.js
RUN npm install && \
    npm run build

### STAGE 2:RUN NGINX###
FROM nginx:alpine

# Copy output bundle to nginx. Check 'outputPath' in angular.json file for output directory
COPY --from=build /front/dist/image-cropper-ui /usr/share/nginx/html

# Overwrite nginx.conf
COPY /nginx.conf  /etc/nginx/conf.d/default.conf


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