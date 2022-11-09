package final_project_group_2.WebApplication.models;

import javax.persistence.*;

@Entity
@Table
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Boolean ac;
    private Integer doors;
    private Integer passengers;
    private Integer largeBagsCapacity;
    private Integer smallBagsCapacity;
    private Boolean ilimitedKm;
    private Boolean automatic;
    private String size;

    public Characteristic() {
    }

    public Characteristic(Boolean ac, Integer doors, Integer passengers, Integer largeBagsCapacity,
                          Integer smallBagsCapacity, Boolean ilimitedKm, Boolean automatic, String size) {
        this.ac = ac;
        this.doors = doors;
        this.passengers = passengers;
        this.largeBagsCapacity = largeBagsCapacity;
        this.smallBagsCapacity = smallBagsCapacity;
        this.ilimitedKm = ilimitedKm;
        this.automatic = automatic;
        this.size = size;
    }

    public Integer getId() {
        return id;
    }

    public Boolean getAc() {
        return ac;
    }

    public void setAc(Boolean ac) {
        this.ac = ac;
    }

    public Integer getDoors() {
        return doors;
    }

    public void setDoors(Integer doors) {
        this.doors = doors;
    }

    public Integer getPassengers() {
        return passengers;
    }

    public void setPassengers(Integer passengers) {
        this.passengers = passengers;
    }

    public Integer getLargeBagsCapacity() {
        return largeBagsCapacity;
    }

    public void setLargeBagsCapacity(Integer largeBagsCapacity) {
        this.largeBagsCapacity = largeBagsCapacity;
    }

    public Integer getSmallBagsCapacity() {
        return smallBagsCapacity;
    }

    public void setSmallBagsCapacity(Integer smallBagsCapacity) {
        this.smallBagsCapacity = smallBagsCapacity;
    }

    public Boolean getIlimitedKm() {
        return ilimitedKm;
    }

    public void setIlimitedKm(Boolean ilimitedKm) {
        this.ilimitedKm = ilimitedKm;
    }

    public Boolean getAutomatic() {
        return automatic;
    }

    public void setAutomatic(Boolean automatic) {
        this.automatic = automatic;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
