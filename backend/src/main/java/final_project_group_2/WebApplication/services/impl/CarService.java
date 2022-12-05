package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.CarDTO;
import final_project_group_2.WebApplication.models.*;
import final_project_group_2.WebApplication.repositories.ICarRepository;
import final_project_group_2.WebApplication.repositories.ICharacteristicRepository;
import final_project_group_2.WebApplication.services.ICarService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class CarService implements ICarService {

    @Autowired
    ICarRepository carRepository;

    @Autowired
    ICharacteristicRepository characteristicService;

    @Autowired
    ObjectMapper mapper;


    @Override
    public List<CarDTO> filterCars(Specification spec){
        List<CarDTO> listCarsDTO = new ArrayList<>();
        List<Car> cars = carRepository.findAll(spec);
        if (cars.size() > 0) {
            for (Car car : cars) {
                listCarsDTO.add(mapper.convertValue(car, CarDTO.class));
            }}
        return listCarsDTO;
    }

    @Override
    public List<CarDTO> listByCategory(String category){
        List<CarDTO> listCarsDTO = new ArrayList<>();
        List<Car> cars = carRepository.findByCategory(category);
        if (cars.size() > 0) {
            for (Car car : cars) {
                listCarsDTO.add(mapper.convertValue(car, CarDTO.class));
            }}
        return listCarsDTO;
    }

    @Override
    public ResponseEntity<?> addCar(Car newCar) {
        if (carRepository.save(newCar) != null) return ResponseEntity.ok(HttpStatus.CREATED);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public List<CarDTO> listCars() {
        List<CarDTO> listCarsDTO = new ArrayList<>();
        List<Car> listCars = carRepository.findAll();
        for (Car car : listCars) {
            listCarsDTO.add(mapper.convertValue(car, CarDTO.class));
        }
        return listCarsDTO;
    }

    @Override
    public List<CarDTO> listCarRandom() {
        List<CarDTO> listCarsDTO = new ArrayList<>();
        List<Car> listCars = carRepository.listCarRandom();
        for (Car car : listCars) {
            listCarsDTO.add(mapper.convertValue(car, CarDTO.class));
        }
        return listCarsDTO;
    }

    @Override
    public ResponseEntity<?> findById(Integer id) {
        CarDTO foundCar = mapper.convertValue(carRepository.findById(id).get(), CarDTO.class);
        if (foundCar !=null){
            return new ResponseEntity<CarDTO>(foundCar, HttpStatus.OK);
        }else{
            return new ResponseEntity("No se encontró el auto solicitado", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> deleteCar(Integer id) {
        if(carRepository.findById(id).isPresent()) {
            carRepository.deleteById(id);
            return new ResponseEntity("El auto con id " + id + " ha sido eliminado.", HttpStatus.OK);
        }
        return new ResponseEntity("El auto con id " + id + " no existe.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateCar(Car carToUpdate) {
        if(carRepository.findById(carToUpdate.getId()).isPresent()) {
            carRepository.save(carToUpdate);
            return new ResponseEntity("El auto con id " + carToUpdate.getId() + " ha sido modificado.", HttpStatus.OK);
        }else{
            return new ResponseEntity("El auto con id " + carToUpdate.getId() + " no existe.", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public List<CarDTO> findByCity(Integer cityId) {
        List<CarDTO> carsDTO = new ArrayList<>();
        List<Car> cars = carRepository.findByCity(cityId);
        if (cars.size() > 0) {
            for (Car car : cars) {
                carsDTO.add(mapper.convertValue(car, CarDTO.class));
            }
        }
        return carsDTO;
    }
    @Override
    public List<CarDTO> findByCityAndCategory(String category, Integer cityId) {
        List<CarDTO> carsDTO = new ArrayList<>();
        List<Car> cars = carRepository.findByCityAndCategory(category, cityId);
        if (cars.size() > 0) {
            for (Car car : cars) {
                carsDTO.add(mapper.convertValue(car, CarDTO.class));
            }
        }
        return carsDTO;
    }
}
