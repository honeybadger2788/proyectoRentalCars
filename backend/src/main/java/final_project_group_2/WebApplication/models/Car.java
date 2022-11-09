package final_project_group_2.WebApplication.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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

    //Hay que cambiar el rating porque ahora es una tabla aparte
    private String ratingTitle;
    private Integer ratingStars;
    private Integer ratingScore;
    private String title;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "car", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Image> images;
    

    public Car() {
    }
    
    public Car(Category category, String descriptionTitle, Characteristic characteristic, String descriptionContent,City city, String ratingTitle, Integer ratingStars, Integer ratingScore, String title) {
        this.category = category;
        this.descriptionTitle = descriptionTitle;
        this.characteristic = characteristic;
        this.descriptionContent = descriptionContent;
        this.city = city;
        this.ratingTitle = ratingTitle;
        this.ratingStars = ratingStars;
        this.ratingScore = ratingScore;
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

    public String getRatingTitle() {
        return ratingTitle;
    }

    public void setRatingTitle(String ratingTitle) {
        this.ratingTitle = ratingTitle;
    }

    public Integer getRatingStars() {
        return ratingStars;
    }

    public void setRatingStars(Integer ratingStars) {
        this.ratingStars = ratingStars;
    }

    public Integer getRatingScore() {
        return ratingScore;
    }

    public void setRatingScore(Integer ratingScore) {
        this.ratingScore = ratingScore;
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
}
