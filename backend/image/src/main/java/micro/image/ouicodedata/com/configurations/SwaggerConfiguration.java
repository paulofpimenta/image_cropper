package micro.image.ouicodedata.com.configurations;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info().title("Image Cropper API").version("0.1").description("A API to crop images")
                        .contact(new Contact().name("Ouicodedata").url("http://ouicodedata.com").email("pfpimenta@gmail.com")));
    }

}
