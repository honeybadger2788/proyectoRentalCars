package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.BookingDTO;
import final_project_group_2.WebApplication.models.Booking;
import final_project_group_2.WebApplication.repositories.IBookingRepository;
import final_project_group_2.WebApplication.services.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class BookingService implements IBookingService {

    @Autowired
    IBookingRepository bookingRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public List<BookingDTO> listBookings() {
        List<BookingDTO> listBookings = new ArrayList<>();
        List<Booking> bookings = bookingRepository.findAll();
        for (Booking booking : bookings) {
            listBookings.add(mapper.convertValue(booking, BookingDTO.class));
        }
        return listBookings;
    }

    @Override
    public ResponseEntity<?> addNewBooking(Booking newBooking) {
        if (bookingRepository.save(newBooking) != null) return ResponseEntity.ok(HttpStatus.CREATED);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public Set<BookingDTO> listByUserId(Integer userId){
        Set<BookingDTO> setBookings = new HashSet<>();
        List<Booking> bookings = bookingRepository.findByUserId(userId);
        for (Booking booking : bookings) {
            setBookings.add(mapper.convertValue(booking, BookingDTO.class));
        }
        return setBookings;
    }

    // @Override
    // public ResponseEntity<?> findById(Integer id) {
    //     // TODO Auto-generated method stub
    //     return null;
    // }

    // @Override
    // public ResponseEntity<?> deleteBooking(Integer id) {
    //     // TODO Auto-generated method stub
    //     return null;
    // }

    // @Override
    // public ResponseEntity<?> updateBooking(Image image) {
    //     // TODO Auto-generated method stub
    //     return null;
    // }

}
