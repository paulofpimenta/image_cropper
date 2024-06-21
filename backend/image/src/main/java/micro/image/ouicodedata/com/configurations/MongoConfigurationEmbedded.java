package micro.image.ouicodedata.com.configurations;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.core.MongoTemplate;

@Profile("dev")
@Configuration
@RequiredArgsConstructor
public class MongoConfigurationEmbedded {

    @Autowired
    private Environment env;

    private final MongoTemplate mongoTemplate;


}
