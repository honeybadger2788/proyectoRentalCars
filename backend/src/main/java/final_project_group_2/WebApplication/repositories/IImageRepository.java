package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IImageRepository extends JpaRepository<Image, Integer> {
}
