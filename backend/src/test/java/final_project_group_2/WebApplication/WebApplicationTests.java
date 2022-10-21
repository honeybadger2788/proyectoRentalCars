package final_project_group_2.WebApplication;

import final_project_group_2.WebApplication.models.Category;
import final_project_group_2.WebApplication.services.impl.CategoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class WebApplicationTests {

	@Autowired
	private CategoryService categoryService;
	@Test
	void contextLoads() {
	}

	@Test
	public void addCategory(){
		Category category = new Category("Fitito", "Esto es un fitito", "http://fitito");
		categoryService.addCategory(category);
		System.out.println(categoryService.listCategories());
	}

}
