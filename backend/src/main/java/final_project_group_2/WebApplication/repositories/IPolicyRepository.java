package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Policy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPolicyRepository extends JpaRepository<Policy, Integer>{
}
