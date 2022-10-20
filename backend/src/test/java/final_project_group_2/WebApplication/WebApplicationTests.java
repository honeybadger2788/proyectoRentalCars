package final_project_group_2.WebApplication;

import final_project_group_2.WebApplication.models.Categoria;
import final_project_group_2.WebApplication.services.impl.CategoriaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class WebApplicationTests {

	@Autowired
	private CategoriaService categoriaService;
	@Test
	void contextLoads() {
	}

	@Test
	public void agregarCategoria(){
		Categoria categoria = new Categoria("Fitito", "Esto es un fitito", "http://fitito");
		categoriaService.agregarCategoria(categoria);
		System.out.println(categoriaService.listarCategorias());
	}

}
