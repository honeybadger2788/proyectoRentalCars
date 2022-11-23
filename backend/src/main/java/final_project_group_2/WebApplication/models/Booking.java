package final_project_group_2.WebApplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

import java.sql.Date;
import java.sql.Time;


@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date startDate;
    private Date endDate;
    private Time time;

    @ManyToOne
    @JoinColumn(name = "carId",nullable = false)
    @JsonBackReference(value="booking-relation")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "userId",nullable = false)
    @JsonBackReference(value="user-relation")
    private User user;

    public Booking() {

    }

    public Booking(Integer id, Date startDate, Date endDate, Time time, Car car, User user) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.time = time;
        this.car = car;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
