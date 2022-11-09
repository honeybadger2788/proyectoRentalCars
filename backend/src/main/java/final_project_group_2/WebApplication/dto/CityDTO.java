package final_project_group_2.WebApplication.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CityDTO {

    private Integer id;

    private String name;
    private String state;

    private String longitude;

    private String latitude;
    private String zipCode;

    public CityDTO(){

    }

    public CityDTO(Integer id, String name, String state, String zipCode, String longitude, String latitude) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.zipCode = zipCode;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
}
