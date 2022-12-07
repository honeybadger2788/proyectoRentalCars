package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.BookingDTO;
import final_project_group_2.WebApplication.dto.BookingDTO2;
import final_project_group_2.WebApplication.models.Booking;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface IBookingService {
    
    List<BookingDTO> listBookings();

    // ResponseEntity<?> findById(Integer id);

    ResponseEntity<?> addNewBooking(Booking booking);

    Set<BookingDTO2> listByCarId(Integer carId);

    ResponseEntity<?> deleteBooking(Integer id);

    // ResponseEntity<?> updateBooking(Image image);
}
