package micro.user.ouicodedata.com.configurations;

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
                .info(new Info().title("User API Demo").version("0.1").description("A Demo API to register users")
                        .contact(new Contact().name("ATOS").url("http://atos.net").email("paulo-fernando.pimenta@atos.net")));
    }

}
