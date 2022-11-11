package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICityRepository extends JpaRepository<City, Integer> {
}
