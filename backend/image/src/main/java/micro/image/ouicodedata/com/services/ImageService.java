package micro.image.ouicodedata.com.services;

import micro.image.ouicodedata.com.model.ImageDocument;
import micro.image.ouicodedata.com.model.Bbox;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ImageService {


    List<ImageDocument> getImages();

    Optional<ImageDocument> getImage(String id);

    String cropImage(String title, MultipartFile file, Bbox bbox)  throws IOException;

    ImageDocument saveImage(String title, String base64) throws IOException;
}
