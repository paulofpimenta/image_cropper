package micro.image.ouicodedata.com.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;


public record InfoDetails (int httpStatus,String message,
                            @JsonProperty("time") Timestamp transactionTime,
                            Object result){

}