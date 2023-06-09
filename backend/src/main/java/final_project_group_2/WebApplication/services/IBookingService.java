package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.BookingDTO;
import final_project_group_2.WebApplication.models.Booking;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface IBookingService {
    
    List<BookingDTO> listBookings();

    // ResponseEntity<?> findById(Integer id);

    Set<BookingDTO> listByUserId(Integer userId);

    ResponseEntity<?> addNewBooking(Booking booking);

    Set<BookingDTO> listByCarId(Integer carId);

    ResponseEntity<?> deleteBooking(Integer id);

    // ResponseEntity<?> updateBooking(Image image);
}
