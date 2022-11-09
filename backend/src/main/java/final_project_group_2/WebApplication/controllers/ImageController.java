package final_project_group_2.WebApplication.controllers;


import final_project_group_2.WebApplication.dto.ImageDTO;
import final_project_group_2.WebApplication.models.Image;
import final_project_group_2.WebApplication.services.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://s3-0222ftc1-grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/images")
public class ImageController {

    @Autowired
    IImageService imageService;

    //Devolver el listado completo de imagenes
    @GetMapping
    public List<ImageDTO> listImagesController() {
        return imageService.listImages();
    }


    //Agregar una imagen
    @PostMapping("/add")
    public ResponseEntity<?> addImage(@RequestBody Image image){

        return imageService.addImage(image);
    }


    //Eliminar una imagen
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Integer id){
        return imageService.deleteImage(id);
    }


    //Editar una imagen
    @PutMapping("/update")
    public ResponseEntity<?> updateImage(@RequestBody Image image){
        return imageService.updateImage(image);
    }

}
