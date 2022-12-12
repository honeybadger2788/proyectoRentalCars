package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import final_project_group_2.WebApplication.dto.CityDTO;
import final_project_group_2.WebApplication.dto.ImageDTO;
import final_project_group_2.WebApplication.models.Image;
import final_project_group_2.WebApplication.repositories.IImageRepository;
import final_project_group_2.WebApplication.services.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ImageService implements IImageService {

    @Autowired
    IImageRepository imageRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public List<ImageDTO> listImages() {
        List<ImageDTO> listImagesDTO = new ArrayList<>();
        List<Image> listImages = imageRepository.findAll();
        for (Image image : listImages) {
            listImagesDTO.add(mapper.convertValue(image, ImageDTO.class));
        }
        return listImagesDTO;
    }

    @Override
    public ResponseEntity<?> findById(Integer id) {
        ImageDTO foundImage = mapper.convertValue(imageRepository.findById(id).get(), ImageDTO.class);
        if (foundImage !=null){
            return new ResponseEntity<ImageDTO>(foundImage, HttpStatus.OK);
        }else{
            return new ResponseEntity("No se encontró la imagen solicitada.", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> addImage(Image newImage) {
        if (imageRepository.save(newImage) != null) return new ResponseEntity<>(HttpStatus.CREATED);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> deleteImage(Integer id) {
        if(imageRepository.findById(id).isPresent()) {
            imageRepository.deleteById(id);
            return new ResponseEntity("La imagen con id " + id + " ha sido eliminada.", HttpStatus.OK);
        }
        return new ResponseEntity("La imagen con id " + id + " no existe.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateImage(Image imageToUpdate) {
        if(imageRepository.findById(imageToUpdate.getId()).isPresent()) {
            imageRepository.save(imageToUpdate);
            return new ResponseEntity("La imagen con id " + imageToUpdate.getId() + " ha sido modificada.", HttpStatus.OK);
        }else{
            return new ResponseEntity("La imagen con id " + imageToUpdate.getId() + " no existe.", HttpStatus.NOT_FOUND);
        }
    }
}
