package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface IUserRepository extends JpaRepository<User, Integer> {
    @Query("from User u where u.email = :email")
    Optional<User> findByEmail(@Param("email") String email);
}
