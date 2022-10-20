package final_project_group_2.WebApplication.controllers;


import final_project_group_2.WebApplication.dto.CategoriaDTO;
import final_project_group_2.WebApplication.models.Categoria;
import final_project_group_2.WebApplication.services.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Endpoint de interaccion con "Categorias"

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    //Inicializo "categoriaService" con todos los metodos implementados
    @Autowired
    ICategoriaService categoriaService;


    //Devolver el listado completo de categorias disponibles
    @GetMapping
    public List<CategoriaDTO> listarCategoriasController() {
        return categoriaService.listarCategorias();
    }


    //Agregar una nueva categoria
    @PostMapping("/add")
    public ResponseEntity<?> registrarCategoria(@RequestBody Categoria categoria){
        categoriaService.agregarCategoria(categoria);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    //Eliminar una categoria
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Integer id){
        categoriaService.eliminarCategoria(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    //Editar una categoria
    @PutMapping("/edit/")
    public ResponseEntity<?> editarCategoria(@RequestBody Categoria categoria){
        categoriaService.actualizarCategoria(categoria);
        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }
}
