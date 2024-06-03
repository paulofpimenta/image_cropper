package micro.image.ouicodedata.com.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String title;
    private Binary image;

    public ImageDocument(String title) {
        super();
        this.title = title;
    }
}