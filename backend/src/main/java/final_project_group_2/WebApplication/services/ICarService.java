package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.CarDTO;
import final_project_group_2.WebApplication.models.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICarService {

    ResponseEntity<?> addCar(Car car);
    
    List<CarDTO> listCars();

    ResponseEntity<?> findById(Integer id);
    List<CarDTO> findByCity(Integer cityId);
    ResponseEntity<?> deleteCar(Integer id);

    ResponseEntity<?> updateCar(Car car);

}
