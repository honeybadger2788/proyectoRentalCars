package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoriaRepository extends JpaRepository<Categoria, Integer> {
}
