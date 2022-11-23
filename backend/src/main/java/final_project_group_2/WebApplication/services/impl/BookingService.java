package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import final_project_group_2.WebApplication.dto.CityDTO;
import final_project_group_2.WebApplication.dto.BookingDTO;
import final_project_group_2.WebApplication.models.Booking;
import final_project_group_2.WebApplication.models.Image;
import final_project_group_2.WebApplication.repositories.IBookingRepository;
import final_project_group_2.WebApplication.repositories.IImageRepository;
import final_project_group_2.WebApplication.services.IBookingService;
import final_project_group_2.WebApplication.services.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        if (bookingRepository.save(newBooking) != null) return ResponseEntity.ok(HttpStatus.OK);
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
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
