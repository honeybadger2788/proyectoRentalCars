package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.ImageDTO;
import final_project_group_2.WebApplication.models.Image;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IImageService {
    List<ImageDTO> listImages();

    ResponseEntity<?> findById(Integer id);

    ResponseEntity<?> addImage(Image image);

    ResponseEntity<?> deleteImage(Integer id);

    ResponseEntity<?> updateImage(Image image);
}
