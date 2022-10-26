package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.CategoryDTO;
import final_project_group_2.WebApplication.models.Category;
import final_project_group_2.WebApplication.repositories.ICategoryRepository;
import final_project_group_2.WebApplication.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    ICategoryRepository categoryRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public List<CategoryDTO> listCategories() {
        List<CategoryDTO> listCategoriesDTO = new ArrayList<>();
        List<Category> listCategories = categoryRepository.findAll();
        for (Category category : listCategories) {
            listCategoriesDTO.add(mapper.convertValue(category, CategoryDTO.class));
        }
        return listCategoriesDTO;
    }

    @Override
    public ResponseEntity<?> findById(Integer id) {
        CategoryDTO foundCategory = mapper.convertValue(categoryRepository.findById(id).get(), CategoryDTO.class);
        if (foundCategory !=null){
            return new ResponseEntity<CategoryDTO>(foundCategory, HttpStatus.OK);
        }else{
            return new ResponseEntity("No se encontró la categoría solicitada", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> addCategory(Category newCategory) {
        if (categoryRepository.save(newCategory) != null) return ResponseEntity.ok(HttpStatus.OK);

        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }

    @Override
    public ResponseEntity<?> deleteCategory(Integer id) {
        if(categoryRepository.findById(id).isPresent()) {
            categoryRepository.deleteById(id);
            return new ResponseEntity("La categoría con id " + id + " ha sido eliminada.", HttpStatus.OK);
        }
        return new ResponseEntity("La categoría con id " + id + " no existe.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateCategory(Category category) {
        if(categoryRepository.findById(category.getId()).isPresent()) {
            categoryRepository.save(category);
            return new ResponseEntity("La categoría con id " + category.getId() + " ha sido modificada.", HttpStatus.OK);
        }else{
            return new ResponseEntity("La categoría con id " + category.getId() + " no existe.", HttpStatus.NOT_FOUND);
        }

    }
}
