package micro.image.ouicodedata.com.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Document("images")
public class ImageDocument {
    @Id
    @JsonIgnore
    private String id;
    @NotEmpty(message = "Image title can not be empty")
    private String title;
    private String base64;

    public ImageDocument(String title) {
        super();
        this.title = title;
    }
}