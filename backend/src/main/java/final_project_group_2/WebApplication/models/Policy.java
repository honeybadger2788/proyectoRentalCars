package final_project_group_2.WebApplication.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
public class Policy {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;

    @ManyToMany(mappedBy = "policies")
    public Set<Car> cars;

    public Policy(){

    }

    public Policy(String title, String description) {
        this.title = title;
        this.description = description;
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
}
