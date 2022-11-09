package final_project_group_2.WebApplication.controllers;


import final_project_group_2.WebApplication.dto.CategoryDTO;
import final_project_group_2.WebApplication.models.Category;
import final_project_group_2.WebApplication.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Endpoint de interaccion con "Categories"

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
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

        return categoryService.addCategory(category);
    }


    //Eliminar una categoria
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Integer id){
        return categoryService.deleteCategory(id);
    }


    //Editar una categoria
    @PutMapping("/update")
    public ResponseEntity<?> updateCategory(@RequestBody Category category){
        return categoryService.updateCategory(category);
    }
}
