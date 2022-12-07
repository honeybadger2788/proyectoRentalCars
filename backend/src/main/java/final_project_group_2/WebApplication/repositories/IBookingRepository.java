package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Booking;

import final_project_group_2.WebApplication.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface IBookingRepository extends JpaRepository<Booking, Integer> {

    @Query("from Booking b join Car c on b.car.id = c.id where c.id = ?1 order by b.id")
    Set<Booking> findByCarId(Integer carId);
}

