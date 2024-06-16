package micro.image.ouicodedata.com.services;

import lombok.RequiredArgsConstructor;
import micro.image.ouicodedata.com.model.Bbox;
import micro.image.ouicodedata.com.model.ImageDocument;
import micro.image.ouicodedata.com.repository.ImageRepository;
import micro.image.ouicodedata.com.util.CropImage;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Component
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    @Override
    public List<ImageDocument> getImages() {
        return imageRepository.findAll();
    }

    @Override
    public Optional<ImageDocument> getImage(String id) {
        return imageRepository.findById(id);
    }

    @Override
    public String cropImage(String title, MultipartFile file, Bbox bbox) throws IOException {

        BufferedImage croppedImage = CropImage.cropImageSquare(file.getBytes(),bbox);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(croppedImage, "png", baos);
        byte[] croppedImageAsByteArray = baos.toByteArray();

        return Base64.getEncoder().encodeToString(croppedImageAsByteArray);
    }

    public ImageDocument saveImage(ImageDocument imageDocument) {

        return imageRepository.insert(imageDocument);
    }
}
