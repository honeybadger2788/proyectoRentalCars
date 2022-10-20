package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.CategoriaDTO;
import final_project_group_2.WebApplication.models.Categoria;
import final_project_group_2.WebApplication.repositories.ICategoriaRepository;
import final_project_group_2.WebApplication.services.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaService implements ICategoriaService {

    @Autowired
    ICategoriaRepository categoriaRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public List<CategoriaDTO> listarCategorias() {
        List<CategoriaDTO> listaCategoriasDTO = new ArrayList<>();
        List<Categoria> listaCategorias = categoriaRepository.findAll();
        for (Categoria categoria : listaCategorias) {
            listaCategoriasDTO.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }
        return listaCategoriasDTO;
    }

    @Override
    public ResponseEntity<?> buscarPorId(Integer id) {
        CategoriaDTO categoriaEncontrada = mapper.convertValue(categoriaRepository.findById(id).get(), CategoriaDTO.class);
        if (categoriaEncontrada !=null){
            return new ResponseEntity<CategoriaDTO>(categoriaEncontrada, HttpStatus.OK);
        }else{
            return new ResponseEntity("No se encontró la categoría solicitada", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Categoria agregarCategoria(Categoria categoriaNueva) {
        return categoriaRepository.save(categoriaNueva);
    }

    @Override
    public ResponseEntity<?> eliminarCategoria(Integer id) {
        if(categoriaRepository.findById(id).isPresent()) {
            categoriaRepository.deleteById(id);
            return new ResponseEntity("La categoría con id " + id + " ha sido eliminada.", HttpStatus.OK);
        }
        return new ResponseEntity("La categoría con id " + id + " no existe.", HttpStatus.NOT_FOUND);
    }

    @Override
    public Categoria actualizarCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }
}
