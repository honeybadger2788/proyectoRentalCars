package final_project_group_2.WebApplication.controllers;

import final_project_group_2.WebApplication.dto.RatingDTO;
import final_project_group_2.WebApplication.models.Rating;
import final_project_group_2.WebApplication.services.IRatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://s3-0222ftc1-grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/rating")
public class RatingController {
    @Autowired
    IRatingService ratingService;

    //Devolver el listado completo de puntuaciones
    @GetMapping
    public List<RatingDTO> listRatingController() {
        return ratingService.listRating();
    }


    //Agregar una puntuación
    @PostMapping("/add")
    public ResponseEntity<?> addRating(@RequestBody Rating rating){

        return ratingService.addRating(rating);
    }


    //Eliminar una puntuación
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRating(@PathVariable Integer id){
        return ratingService.deleteRating(id);
    }


    //Editar una puntuación
    @PutMapping("/update")
    public ResponseEntity<?> updateRating(@RequestBody Rating rating){
        return ratingService.updateRating(rating);
    }
}
