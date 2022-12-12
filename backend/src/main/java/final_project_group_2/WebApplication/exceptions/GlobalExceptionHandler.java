package final_project_group_2.WebApplication.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity allError(Exception ex, WebRequest req) {
        return new ResponseEntity(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*@ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity notFoundError(ResourceNotFoundException ex){
        return new ResponseEntity(ex.getMessage(),HttpStatus.NOT_FOUND);
    }*/

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity badRequest(BadCredentialsException ex){
        return new ResponseEntity(ex.getMessage(),HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UsernameException.class)
    public ResponseEntity userAlreadyExists(UsernameException ex){
        return new ResponseEntity(ex.getMessage(),HttpStatus.FORBIDDEN);
    }
}
