package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface ICarRepository extends JpaRepository<Car, Integer> {
    @Query("from Car c where c.city.id = ?1 order by c.id")
    List<Car> findByCity(Integer cityId);
}
