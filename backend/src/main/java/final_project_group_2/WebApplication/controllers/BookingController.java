package final_project_group_2.WebApplication.controllers;


import final_project_group_2.WebApplication.dto.BookingDTO;
import final_project_group_2.WebApplication.dto.ImageDTO;
import final_project_group_2.WebApplication.models.Booking;
import final_project_group_2.WebApplication.models.Image;
import final_project_group_2.WebApplication.services.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    IBookingService bookingService;

    //Devolver el listado completo de reservas
    @GetMapping
    public List<BookingDTO> listBookingsController() {
        return bookingService.listBookings();
    }

    //Devolver el listado completo de reservas por usuario
    @GetMapping("/user/{id}")
    public Set<BookingDTO> listBookingsByUserId(@PathVariable Integer id) {
        return bookingService.listByUserId(id);
    }

    //Agregar una reserva
    @PostMapping("/add")
    public ResponseEntity<?> addBooking(@RequestBody Booking booking){
        return bookingService.addNewBooking(booking);
    }


    //Eliminar una reserva
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable Integer id){
        return bookingService.deleteBooking(id);
    }


    // //Editar una reserva
    // @PutMapping("/update")
    // public ResponseEntity<?> updateBooking(@RequestBody Booking booking){
    //     return bookingService.updateBooking(booking);
    // }

    //Devolver el listado completo de reservas por auto
    @GetMapping("/car/{id}")
    public Set<BookingDTO> listBookingsByCarId(@PathVariable Integer id) {
        return bookingService.listByCarId(id);
    }
}
