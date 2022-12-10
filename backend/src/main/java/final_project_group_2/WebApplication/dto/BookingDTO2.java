package final_project_group_2.WebApplication.dto;

import java.sql.Time;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import final_project_group_2.WebApplication.models.Car;
import final_project_group_2.WebApplication.models.User;

@JsonIgnoreProperties(ignoreUnknown = true)
public class BookingDTO2 {
    
    private Integer id;
    private Date startDate;
    private Date endDate;
    private Time time;

    
    public BookingDTO2() {
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

}
