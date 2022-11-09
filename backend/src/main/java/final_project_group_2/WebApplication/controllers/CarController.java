package final_project_group_2.WebApplication.controllers;


import final_project_group_2.WebApplication.dto.CarDTO;
import final_project_group_2.WebApplication.models.Car;
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

    //Inicializo "categoriaService" con todos los metodos implementados
    @Autowired
    ICarService carService;


    //Devolver el listado completo de categorias disponibles
    @GetMapping
    public List<CarDTO> listCarsController() {
        return carService.listCars();
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

    //Devolver listado de productos por ciudad
    @GetMapping("/filter")
    public List<CarDTO> getCarsByCity(@RequestParam Integer cityId) {
        return carService.findByCity(cityId);
    }
}
