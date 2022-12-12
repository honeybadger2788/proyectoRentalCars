package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.CarDTO;
import final_project_group_2.WebApplication.models.*;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICarService {

    ResponseEntity<?> addCar(Car car);
    List<CarDTO> listCars();
    ResponseEntity<?> findById(Integer id);
    List<CarDTO> findByCity(Integer city);
    ResponseEntity<?> deleteCar(Integer id);
    ResponseEntity<?> updateCar(Car car);
    List<CarDTO> listByCategory(String category);
    List<CarDTO> listCarRandom();
    List<CarDTO> findByCityAndCategory(String category, Integer city);
    List<CarDTO> filterCars(Specification spec);
}
