package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Integer> {
}
