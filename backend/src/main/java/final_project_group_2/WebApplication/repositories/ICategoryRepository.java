package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}
