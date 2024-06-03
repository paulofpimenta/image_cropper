package micro.image.ouicodedata.com.repository;

import micro.image.ouicodedata.com.model.ImageDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface ImageRepository  extends MongoRepository<ImageDocument, String> {

    @Query("{'id': ?0}")
    Optional<ImageDocument> findById(String id);
}
