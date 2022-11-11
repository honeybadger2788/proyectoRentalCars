package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Car;
import final_project_group_2.WebApplication.models.Category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ICarRepository extends JpaRepository<Car, Integer> {
    
    @Query(value = "FROM Car c WHERE c.category.title = ?1")
    List<Car> findByCategory(String category);

    @Query("from Car c where c.city.id = ?1 order by c.id")
    List<Car> findByCity(Integer cityId);

    @Query("from Car c where c.category.title = ?1 and c.city.id = ?2")
    List<Car> findByCityAndCategory(String category, Integer cityId);

    @Query("FROM Car c ORDER BY RAND()")
    List<Car> listCarRandom();
}

