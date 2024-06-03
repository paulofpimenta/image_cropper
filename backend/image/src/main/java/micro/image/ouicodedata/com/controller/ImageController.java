package micro.image.ouicodedata.com.controller;


import com.google.gson.Gson;
import micro.image.ouicodedata.com.annotations.TrackTime;
import micro.image.ouicodedata.com.model.*;
import micro.image.ouicodedata.com.services.ImageServiceImpl;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

@RequestMapping("/image")
@RestController
@RequiredArgsConstructor
@ControllerAdvice
@Validated
@Slf4j
public class ImageController {

    private final ImageServiceImpl imageService;

    @TrackTime
    @PostMapping(value = "/upload")
    public ResponseEntity<InfoDetails> cropImage(@RequestParam("title") String title,
                            @RequestParam("image") MultipartFile image,
                            @RequestParam("bbox") String bbox) throws IOException {
        Gson gson = new Gson();
        Bbox cropZone = gson.fromJson(bbox, Bbox.class);
        String base64 = imageService.cropImage(title, image, cropZone);
        String message = base64.isEmpty() ? "Image could not be cropped" : "Imaged cropped successfully";
        ImageUploadResponse result = new ImageUploadResponse(title,base64);

        InfoDetails infoDetails = new InfoDetails(HttpStatus.OK.value(),message,Timestamp.from(Instant.now()),result);
        return new ResponseEntity<>(infoDetails,HttpStatus.OK);

    }

    @TrackTime
    @PostMapping(value = "/save")
    public ResponseEntity<InfoDetails> saveImage(@RequestParam("title") String title,
                                                 @RequestParam("image") MultipartFile image,
                                                 @RequestParam("bbox") String bbox) throws IOException {
        Gson gson = new Gson();
        Bbox cropZone = gson.fromJson(bbox, Bbox.class);
        String base64 = imageService.cropImage(title, image, cropZone);
        String message = base64.isEmpty() ? "Image could not be cropped" : "Imaged cropped successfully";
        ImageUploadResponse result = new ImageUploadResponse(title,base64);

        InfoDetails infoDetails = new InfoDetails(HttpStatus.OK.value(),message,Timestamp.from(Instant.now()),result);
        return new ResponseEntity<>(infoDetails,HttpStatus.OK);

    }

    @Hidden
    @RequestMapping("/")
    public @ResponseBody String greeting() {
        return "Welcome to the image demo API";
    }
}
