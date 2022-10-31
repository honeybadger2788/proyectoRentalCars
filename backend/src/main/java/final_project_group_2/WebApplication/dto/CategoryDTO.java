package final_project_group_2.WebApplication.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoryDTO {

    private Integer id;
    private String title;
    private String description;
    private String image;

    public CategoryDTO(){

    };

    public CategoryDTO(Integer id, String title, String description, String image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "CategoriaDTO{" +
                "id=" + id +
                ", titulo='" + title + '\'' +
                ", descripcion='" + description + '\'' +
                ", imagen='" + image + '\'' +
                '}';
    }
}
