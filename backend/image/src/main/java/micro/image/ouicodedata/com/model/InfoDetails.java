package micro.image.ouicodedata.com.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;


public record InfoDetails (int httpStatus,String message,
                           @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
                           @JsonProperty("datetime") Timestamp transactionTime,
                            Object result){

}