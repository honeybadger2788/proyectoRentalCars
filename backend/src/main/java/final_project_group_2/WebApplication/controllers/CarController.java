package final_project_group_2.WebApplication.controllers;


import final_project_group_2.WebApplication.dto.CarDTO;
import final_project_group_2.WebApplication.models.Car;
import final_project_group_2.WebApplication.repositories.ICarRepository;
import final_project_group_2.WebApplication.searchs.CarSpecification;
import final_project_group_2.WebApplication.services.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Endpoint de interaccion con "Categories"

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/car")
public class CarController {

    @Autowired
    ICarService carService;

    @GetMapping   
    public List<CarDTO> listCars(@RequestParam(required = false)  String category, @RequestParam(required = false) Integer city){
        
        if(category != null && city == null){
            return carService.listByCategory(category);
        } else if (city != null && category == null) {
            return carService.findByCity(city);
        } else if (category != null && city != null){
            return carService.findByCityAndCategory(category,city);
        } else {
            return carService.listCarRandom();
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCarById(@PathVariable int id) {
        return carService.findById(id);
    }


    //Agregar una nueva categoria
    @PostMapping("/add")
    public ResponseEntity<?> addCar(@RequestBody Car car){

        return carService.addCar(car);
    }


    //Eliminar una categoria
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable Integer id){
        return carService.deleteCar(id);
    }


    //Editar una categoria
    @PutMapping("/update")
    public ResponseEntity<?> updateCategory(@RequestBody Car car){
        return carService.updateCar(car);
    }


}
