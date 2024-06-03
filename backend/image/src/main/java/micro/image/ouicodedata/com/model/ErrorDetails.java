package micro.image.ouicodedata.com.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;
import java.util.List;

public record ErrorDetails (int status,String message, List<String> errors,
                           @JsonProperty("time") Timestamp timeError){

}

