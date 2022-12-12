package final_project_group_2.WebApplication.controllers;


import final_project_group_2.WebApplication.dto.CarDTO;
import final_project_group_2.WebApplication.models.Car;
import final_project_group_2.WebApplication.repositories.ICarRepository;
import final_project_group_2.WebApplication.searchs.CarSpecification;
import final_project_group_2.WebApplication.services.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

//Endpoint de interaccion con "Categories"

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/car")
public class CarController {

    @Autowired
    ICarService carService;

    @GetMapping
    public List<CarDTO> test(@RequestParam(required = false)  String category, @RequestParam(required = false) Integer city, @RequestParam(required = false) Date startDate, @RequestParam(required = false) Date endDate){


        Specification<Car> spec = new CarSpecification();
        if(category != null){
            System.out.println(category);
            spec = spec.and(new CarSpecification().carsByCategoryTitle(category));
        }
        if (startDate != null && endDate != null) {
            spec = spec.and(new CarSpecification().carsByDate(startDate,endDate));

        }
        if (city != null) {
            System.out.println(city);
            spec = spec.and(new CarSpecification().carsByCity(city));

        }
        System.out.println(spec.toString());
        return carService.filterCars(spec);

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
