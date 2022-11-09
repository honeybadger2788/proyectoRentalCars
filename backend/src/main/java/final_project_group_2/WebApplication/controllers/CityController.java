package final_project_group_2.WebApplication.controllers;

import final_project_group_2.WebApplication.dto.CityDTO;
import final_project_group_2.WebApplication.models.City;
import final_project_group_2.WebApplication.services.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/cities")
public class CityController {

    //Inicializo "cityService" con todos los metodos implementados
    @Autowired
    ICityService cityService;


    //Devolver el listado completo de ciudades disponibles
    @GetMapping
    public List<CityDTO> listCitiesController() {
        return cityService.listCities();
    }


    //Agregar una nueva ciudad
    @PostMapping("/add")
    public ResponseEntity<?> addCity(@RequestBody City city){

        return cityService.addCity(city);
    }


    //Eliminar una ciudad
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCity(@PathVariable Integer id){
        return cityService.deleteCity(id);
    }


    //Editar una categoria
    @PutMapping("/update")
    public ResponseEntity<?> updateCity(@RequestBody City city){
        return cityService.updateCity(city);
    }
}
