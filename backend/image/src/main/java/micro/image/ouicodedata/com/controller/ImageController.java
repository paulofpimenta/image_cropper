package micro.image.ouicodedata.com.controller;


import com.google.gson.Gson;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import micro.image.ouicodedata.com.annotations.TrackTime;
import micro.image.ouicodedata.com.model.*;
import micro.image.ouicodedata.com.services.ImageServiceImpl;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.Instant;


@Tag(name = "Image Cropper")
@RequestMapping("/image")
@RestController
@RequiredArgsConstructor
@ControllerAdvice
@Validated
@Slf4j
public class ImageController {

    private final ImageServiceImpl imageService;

    @TrackTime
    @Operation(summary = "Crop an image based on a valid bounding box")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Imaged cropped successfully",
                    content = { @Content(mediaType = "application/json") }),
            @ApiResponse(responseCode = "400", description = "Image could not be cropped",
                    content = @Content)
    })
    @PostMapping(value = "/upload",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<InfoDetails> cropImage(
                            @RequestParam("title")
                                @Parameter( name = "title",required = true, description = "The image's title") String title,
                            @RequestParam("image")
                                @Parameter( name = "image",required = true, description = "The submitted multipart image")MultipartFile image,
                            @RequestParam("bbox")
                            @Parameter( name = "bbox",required = true, description = "The image's bounding box")
                                String bbox) throws IOException {
        Gson gson = new Gson();
        Bbox cropZone = gson.fromJson(bbox, Bbox.class);
        String base64 = imageService.cropImage(title, image, cropZone);
        String message = base64.isEmpty() ? "Image could not be cropped" : "Imaged cropped successfully";
        ImageUploadResponse result = new ImageUploadResponse(title,base64);

        InfoDetails infoDetails = new InfoDetails(HttpStatus.OK.value(),message,Timestamp.from(Instant.now()),result);
        return new ResponseEntity<>(infoDetails,HttpStatus.OK);

    }

    @TrackTime
    @Operation(summary = "Save an image in the date base")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Image was successfully saved ",
                    content = { @Content(mediaType = "application/json") }),
            @ApiResponse(responseCode = "400", description = "Image cannot be saved",
                    content = @Content)
    })
    @PostMapping(value = "/save",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<InfoDetails> saveImage(@RequestParam("title") String title,
                                                 @RequestParam("base64") String base64) throws IOException {

        ImageDocument imageDocument = imageService.saveImage(title, base64);
        String message = imageDocument.getImage().length() == 0 ? "Image could not be saved" : "Imaged saved successfully";
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
