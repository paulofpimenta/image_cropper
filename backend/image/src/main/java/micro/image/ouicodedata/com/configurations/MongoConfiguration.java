package micro.image.ouicodedata.com.configurations;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;

import java.util.Objects;

@Profile("prod")
@Configuration
@RequiredArgsConstructor
public class MongoConfiguration {

    @Autowired
    private Environment env;


    private final MongoTemplate mongoTemplate;

    public void getActiveProfiles() {
        for (String profileName : env.getActiveProfiles()) {
            System.out.println("Currently active profile - " + profileName);
        }
    }


}
