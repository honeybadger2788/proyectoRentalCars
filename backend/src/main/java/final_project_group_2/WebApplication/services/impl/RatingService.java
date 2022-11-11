package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.RatingDTO;
import final_project_group_2.WebApplication.models.Rating;
import final_project_group_2.WebApplication.repositories.IRatingRepository;
import final_project_group_2.WebApplication.services.IRatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RatingService implements IRatingService {

    @Autowired
    IRatingRepository ratingRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public List<RatingDTO> listRating() {
        List<RatingDTO> listRatingDTO = new ArrayList<>();
        List<Rating> listRating = ratingRepository.findAll();
        for (Rating rating: listRating) {
            listRatingDTO.add(mapper.convertValue(rating, RatingDTO.class));
        }
        return listRatingDTO;
    }

    @Override
    public ResponseEntity<?> findById(Integer id) {
        RatingDTO foundRating = mapper.convertValue(ratingRepository.findById(id).get(), RatingDTO.class);
        if (foundRating !=null){
            return new ResponseEntity<RatingDTO>(foundRating, HttpStatus.OK);
        }else{
            return new ResponseEntity("No se encontró la puntuación solicitada.", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> addRating(Rating newRating) {
        if (ratingRepository.save(newRating) != null) return ResponseEntity.ok(HttpStatus.OK);
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }

    @Override
    public ResponseEntity<?> deleteRating(Integer id) {
        if(ratingRepository.findById(id).isPresent()) {
            ratingRepository.deleteById(id);
            return new ResponseEntity("La puntuación con id " + id + " ha sido eliminada.", HttpStatus.OK);
        }
        return new ResponseEntity("La puntuación con id " + id + " no existe.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateRating(Rating ratingToUpdate) {
        if(ratingRepository.findById(ratingToUpdate.getId()).isPresent()) {
            ratingRepository.save(ratingToUpdate);
            return new ResponseEntity("La puntuación con id " + ratingToUpdate.getId() + " ha sido modificada.", HttpStatus.OK);
        }else{
            return new ResponseEntity("La puntuación con id " + ratingToUpdate.getId() + " no existe.", HttpStatus.NOT_FOUND);
        }
    }
}
