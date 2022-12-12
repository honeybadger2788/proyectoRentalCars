package final_project_group_2.WebApplication.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import final_project_group_2.WebApplication.models.Car;


@JsonIgnoreProperties(ignoreUnknown = true)
public class RatingDTO {
    private Integer id;

    private Car car;
    private Integer userId;
    private Integer score;

    public RatingDTO(){

    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }
}
