package final_project_group_2.WebApplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="image")
public class Image {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String title;

    private String url;

    @ManyToOne
    @JoinColumn(name = "carId",nullable = false)
    @JsonBackReference(value="image-relation")
    private Car car;

    public Image(){

    }
    public Image(String title, String url, Car car) {
        this.title = title;
        this.url = url;
        this.car = car;

    }
    public Integer getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public Car getCar() {
        return car;
    }
    public void setCar(Car car) {
        this.car = car;
    }

}
