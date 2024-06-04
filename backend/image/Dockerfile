FROM openjdk:21-jdk
MAINTAINER ouicodedata.com

WORKDIR /workspace/image-cropper-back

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

COPY src ./src


CMD ["./mvnw", "spring-boot:run"]
EXPOSE 8080