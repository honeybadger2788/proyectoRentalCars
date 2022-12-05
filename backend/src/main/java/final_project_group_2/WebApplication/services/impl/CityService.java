package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.CityDTO;
import final_project_group_2.WebApplication.models.City;
import final_project_group_2.WebApplication.repositories.ICityRepository;
import final_project_group_2.WebApplication.services.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CityService implements ICityService {
    @Autowired
    ICityRepository cityRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ResponseEntity<?> addCity(City newCity) {
        if (cityRepository.save(newCity) != null) return new ResponseEntity<>(HttpStatus.CREATED);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public List<CityDTO> listCities() {
        List<CityDTO> listCitiesDTO = new ArrayList<>();
        List<City> listCities = cityRepository.findAll();
        for (City city : listCities) {
            listCitiesDTO.add(mapper.convertValue(city, CityDTO.class));
        }
        return listCitiesDTO;
    }

    @Override
    public ResponseEntity<?> findById(Integer id) {
        CityDTO foundCity = mapper.convertValue(cityRepository.findById(id).get(), CityDTO.class);
        if (foundCity !=null){
            return new ResponseEntity<CityDTO>(foundCity, HttpStatus.OK);
        }else{
            return new ResponseEntity("No se encontró la ciudad solicitada.", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> deleteCity(Integer id) {
        if(cityRepository.findById(id).isPresent()) {
            cityRepository.deleteById(id);
            return new ResponseEntity("La ciudad con id " + id + " ha sido eliminada.", HttpStatus.OK);
        }
        return new ResponseEntity("La ciudad con id " + id + " no existe.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateCity(City cityToUpdate) {
        if(cityRepository.findById(cityToUpdate.getId()).isPresent()) {
            cityRepository.save(cityToUpdate);
            return new ResponseEntity("La ciudad con id " + cityToUpdate.getId() + " ha sido modificada.", HttpStatus.OK);
        }else{
            return new ResponseEntity("La ciudad con id " + cityToUpdate.getId() + " no existe.", HttpStatus.NOT_FOUND);
        }
    }
}
