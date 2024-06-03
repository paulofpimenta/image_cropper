# Build
FROM  maven:3.9.6-eclipse-temurin-21-alpine AS build


# Create an application directory
RUN mkdir -p /app

# The /app directory should act as the main application directory
WORKDIR /app


COPY backend/image .
COPY src /build/src/

RUN mvn package

# Package
WORKDIR /app

COPY --from=MAVEN_BUILD /build/target/docker-boot-intro-0.1.0.jar /app/
ENTRYPOINT ["java", "-jar", "docker-boot-intro-0.1.0.jar"]