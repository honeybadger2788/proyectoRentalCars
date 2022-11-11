package final_project_group_2.WebApplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "carId",nullable = false)
    @JsonBackReference
    private Car car;
    private Integer userId;
    private Integer score;

    public Rating(){

    }

    public Rating(Car car, Integer userId, Integer score) {
        this.car = car;
        this.userId = userId;
        this.score = score;
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
