package final_project_group_2.WebApplication.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="car")
public class Car extends ProductAbstract{

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;
    private String descriptionTitle;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "characteristicId", referencedColumnName = "id")
    private Characteristic characteristic;
    private String descriptionContent;

    @ManyToOne
    @JoinColumn(name = "cityId")
    private City city;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "car", cascade = CascadeType.ALL)
    @JsonManagedReference(value="rating-relation")
    private Set<Rating> rating;

    private String title;


    @OneToMany(fetch = FetchType.LAZY,mappedBy = "car", cascade = CascadeType.ALL)
    @JsonManagedReference(value="image-relation")
    private Set<Image> images;

    @ManyToMany(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            fetch = FetchType.EAGER
    )
    @JoinTable(name = "car_policy",
            joinColumns = @JoinColumn(name = "carId"),
            inverseJoinColumns = @JoinColumn(name = "policyId"))
    private Set<Policy> policies = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "car", cascade = CascadeType.ALL)
    @JsonManagedReference(value="booking-relation")
    private Set<Booking> bookings;
    

    public Car() {
    }
    
    public Car(Category category, String descriptionTitle, Characteristic characteristic, String descriptionContent,City city, String title) {
        this.category = category;
        this.descriptionTitle = descriptionTitle;
        this.characteristic = characteristic;
        this.descriptionContent = descriptionContent;
        this.city = city;
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getDescriptionTitle() {
        return descriptionTitle;
    }

    public void setDescriptionTitle(String descriptionTitle) {
        this.descriptionTitle = descriptionTitle;
    }

    public Characteristic getCharacteristic() {
        return characteristic;
    }

    public void setCharacteristic(Characteristic characteristic) {
        this.characteristic = characteristic;
    }

    public String getDescriptionContent() {
        return descriptionContent;
    }

    public void setDescriptionContent(String descriptionContent) {
        this.descriptionContent = descriptionContent;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Set<Rating> getRating() {
        return rating;
    }

    public void setRating(Set<Rating> rating) {
        this.rating = rating;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Image> getImages() {
        return images;
    }

    public void setImages(Set<Image> images) {
        this.images = images;
    }

    public Set<Policy> getPolicies() {
        return policies;
    }

    public void setPolicies(Set<Policy> policies) {
        this.policies = policies;
    }

    public Set<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(Set<Booking> bookings) {
        this.bookings = bookings;
    }

}
