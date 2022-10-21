package final_project_group_2.WebApplication.controllers;


import final_project_group_2.WebApplication.dto.CategoryDTO;
import final_project_group_2.WebApplication.models.Category;
import final_project_group_2.WebApplication.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Endpoint de interaccion con "Categories"

@RestController
@RequestMapping("/categories")
public class CategoryController {

    //Inicializo "categoriaService" con todos los metodos implementados
    @Autowired
    ICategoryService categoryService;


    //Devolver el listado completo de categorias disponibles
    @GetMapping
    public List<CategoryDTO> listCategoriesController() {
        return categoryService.listCategories();
    }


    //Agregar una nueva categoria
    @PostMapping("/add")
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        categoryService.addCategory(category);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    //Eliminar una categoria
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Integer id){
        categoryService.deleteCategory(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    //Editar una categoria
    @PutMapping("/update")
    public ResponseEntity<?> updateCategory(@RequestBody Category category){
        categoryService.updateCategory(category);
        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }
}
