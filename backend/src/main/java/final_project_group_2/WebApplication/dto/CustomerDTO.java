package final_project_group_2.WebApplication.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import final_project_group_2.WebApplication.models.Booking;
import final_project_group_2.WebApplication.models.City;
import final_project_group_2.WebApplication.models.Role;

import java.util.Set;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CustomerDTO {
    private Integer id;

    String firstName;

    String lastName;

    String email;

    String password;

    City city;

    Role role;


    private Set<BookingDTO> bookings;

    public CustomerDTO(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Set<BookingDTO> getBookings() {
        return bookings;
    }

    public void setBookings(Set<BookingDTO> bookings) {
        this.bookings = bookings;
    }
}
