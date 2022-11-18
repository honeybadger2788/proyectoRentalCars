package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role, Integer> {
}
