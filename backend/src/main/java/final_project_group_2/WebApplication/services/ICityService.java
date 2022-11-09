package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.CityDTO;
import final_project_group_2.WebApplication.models.City;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICityService {

    List<CityDTO> listCities();

    ResponseEntity<?> findById(Integer id);

    ResponseEntity<?> addCity(City cit);

    ResponseEntity<?> deleteCity(Integer id);

    ResponseEntity<?> updateCity(City city);
}
