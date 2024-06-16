package micro.image.ouicodedata.com.exception;

import micro.image.ouicodedata.com.model.ErrorDetails;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ImageCropperRestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({ ConstraintViolationException.class })
    public ResponseEntity<ErrorDetails> handleConstraintViolation(final ConstraintViolationException ex) {
        final List<String> errors = ex.getConstraintViolations().stream().map(ConstraintViolation::getMessage).collect(Collectors.toList());
        final ErrorDetails apiError = new ErrorDetails(HttpStatus.BAD_REQUEST.value(),"Image constraints violated", errors, Timestamp.from(Instant.now()));
        return new ResponseEntity<>(apiError, new HttpHeaders(), apiError.status());
    }

    @ExceptionHandler({ ImageCropperException.class })
    public ResponseEntity<ErrorDetails> handleUserNotFound(final ImageCropperException ex) {
        final List<String> errors = ex.getMessage().lines().toList();
        final ErrorDetails apiError = new ErrorDetails(HttpStatus.NOT_FOUND.value(),"Image not found", errors, Timestamp.from(Instant.now()));
        return new ResponseEntity<>(apiError, new HttpHeaders(), apiError.status());
    }
}
