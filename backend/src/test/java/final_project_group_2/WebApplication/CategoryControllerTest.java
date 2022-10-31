package final_project_group_2.WebApplication;

import final_project_group_2.WebApplication.models.Category;
import final_project_group_2.WebApplication.services.impl.CategoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoryControllerTest {

    // Inyectamos dependencias
    @Autowired
    private CategoryService categoryService;
    @Autowired
    MockMvc mockMvc;

    // Creamos datos para utilizar en los test
    Category category = new Category("Carros", "Los mejores y más baratos en renta", "https://res.cloudinary.com/dk5hasdld/image/upload/v1666380861/CarImage_bowhcb.jpg");


    // Test Unitario Paciente
    @Transactional
    @Test
    @Order(1)
    void testAddCategory() {
        assertNotNull(categoryService.addCategory(category));
        assertEquals(category.getId(), 1);
    }

    // Test Unitario Actualizar Categoria
    @Transactional
    @Test
    @Order(2)
    void testEditCategory() {
        assertNotNull(categoryService.updateCategory(category));
    }

    // Test Unitario Eliminar Categoria
    @Transactional
    @Test
    @Order(3)
    void testDeleteCategory() {
        Category category = new Category("Carros", "Los mejores y más baratos en renta", "https://res.cloudinary.com/dk5hasdld/image/upload/v1666380861/CarImage_bowhcb.jpg");
        categoryService.addCategory(category);
        assertNull(categoryService.deleteCategory(category.getId()));
    }

    // Test de integracion listando categorias
    @Test
    @Order(4)
    @WithMockUser
    void listadoCategoriasIntegracion() throws Exception{
        categoryService.addCategory(category);
        mockMvc.perform(MockMvcRequestBuilders.get("/")
                        .secure(true)
                        .accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}

