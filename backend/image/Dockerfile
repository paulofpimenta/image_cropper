FROM openjdk:21-jdk
MAINTAINER ouicodedata.com


WORKDIR /workspace/image-cropper-back

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

COPY src ./src

ARG ENV

ENV profile=$ENV

CMD ["./mvnw", "spring-boot:run", "-Dspring.profiles.active=${profile}"]
