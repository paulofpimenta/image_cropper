package micro.image.ouicodedata.com.util;

import micro.image.ouicodedata.com.model.Bbox;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

public class CropImage {

    public static BufferedImage cropImageSquare(byte[] image, Bbox bbox) throws IOException {
        // Get a BufferedImage object from a byte array
        InputStream in = new ByteArrayInputStream(image);
        BufferedImage originalImage = ImageIO.read(in);

        int upperLeftCornerX = bbox.x1();
        int upperLeftCornerY = bbox.y1();
        int bboxWidth = bbox.x2() - bbox.x1();
        int bboxHeight = bbox.y2() - bbox.y1();

        // Crop
        return originalImage.getSubimage(upperLeftCornerX,upperLeftCornerY,bboxWidth, bboxHeight);
    }
}
