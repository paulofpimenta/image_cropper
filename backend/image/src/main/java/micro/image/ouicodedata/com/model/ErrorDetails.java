package micro.image.ouicodedata.com.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;
import java.util.List;

public record ErrorDetails (int status,String message, List<String> errors,
                            @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
                            @JsonProperty("time") Timestamp timeError){

}

