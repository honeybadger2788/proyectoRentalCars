package final_project_group_2.WebApplication.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import final_project_group_2.WebApplication.models.Car;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ImageDTO {

    private Integer id;

    private String title;

    private String url;

    private Car car;

    public ImageDTO(){
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
