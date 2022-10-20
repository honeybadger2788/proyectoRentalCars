package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.CategoriaDTO;
import final_project_group_2.WebApplication.models.Categoria;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICategoriaService {

    List<CategoriaDTO> listarCategorias();

    ResponseEntity<?> buscarPorId(Integer id);

    Categoria agregarCategoria(Categoria categoria);

    ResponseEntity<?> eliminarCategoria(Integer id);

    Categoria actualizarCategoria(Categoria categoria);
}
