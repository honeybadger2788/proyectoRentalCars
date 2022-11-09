package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.RatingDTO;
import final_project_group_2.WebApplication.models.Rating;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IRatingService {
    List<RatingDTO> listRating();

    ResponseEntity<?> findById(Integer id);

    ResponseEntity<?> addRating(Rating rating);

    ResponseEntity<?> deleteRating(Integer id);

    ResponseEntity<?> updateRating(Rating rating);
}
