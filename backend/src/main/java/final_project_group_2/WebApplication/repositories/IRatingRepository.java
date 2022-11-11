package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRatingRepository extends JpaRepository<Rating,Integer> {
}
