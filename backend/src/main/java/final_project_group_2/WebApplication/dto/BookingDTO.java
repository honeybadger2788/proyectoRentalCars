package final_project_group_2.WebApplication.dto;

import java.sql.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import final_project_group_2.WebApplication.models.Car;
import final_project_group_2.WebApplication.models.User;

@JsonIgnoreProperties(ignoreUnknown = true)
public class BookingDTO {
    
    private Integer id;
    private Date startDate;
    private Date endDate;
    private Time time;
    private Car car;
    private User user;

    
    public BookingDTO() {
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
