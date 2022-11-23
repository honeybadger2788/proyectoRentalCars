package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Booking;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookingRepository extends JpaRepository<Booking, Integer> {
    

}

