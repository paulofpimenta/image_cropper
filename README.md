# 1. Introduction

This is a fullstack demo application that allows a user to crop submited images based on live drag and drop defined zones
The crop process can be made on the client side or on the server side

# 2. Architecture

The backend is an API built with SprinBoot 3.5 and Java 21. The frontend was built with Angular version 14. As a multi container application, the application was build with docker compose and Nginx 1.23 as a reverse proxy 


# 3. Run the application

The application is deployed on a docker contrainer with a docker compose. The docker compose file is on the root of the project. To run the application, simply run

```shell
docker compose up
```

from the application root folder. The application runs on `http://localhost:4200/`


# 4. API documentation

The api is documented with OpenApi3. Once the aplication is running, you can access the documentation in the link below : 

```shell
http://localhost:8080/api/v1/image-cropper
```
