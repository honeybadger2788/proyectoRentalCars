package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.CategoryDTO;
import final_project_group_2.WebApplication.models.Category;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICategoryService {

    List<CategoryDTO> listCategories();

    ResponseEntity<?> findById(Integer id);

    ResponseEntity<?> addCategory(Category category);

    ResponseEntity<?> deleteCategory(Integer id);

    ResponseEntity<?> updateCategory(Category category);
}
