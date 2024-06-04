# Introduction

This is a fullstack demo application that allows a user to crop submited images based on live drag and drop defined zones
The crop process can be made on the client side or on the server side

# Architecture

The backend is an API built with SprinBoot 3.5 and Java 21. The frontend was built with Angular version 14 and the docker used Nginx 1.23 as a reverse proxy 


# Run the application

The application is deployed on a docker contrainer with a docker compose. The docker compose file is on the root of the project. To run the application, simply run

```shell
docker compose up
```

from the application root folder

