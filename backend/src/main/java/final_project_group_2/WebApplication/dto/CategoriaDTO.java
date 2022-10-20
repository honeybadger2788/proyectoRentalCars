package final_project_group_2.WebApplication.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import final_project_group_2.WebApplication.models.Categoria;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoriaDTO {

    private Integer id;
    private String titulo;
    private String descripcion;
    private String imagen;

    public CategoriaDTO(){

    };

    public CategoriaDTO(Integer id, String titulo, String descripcion, String imagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    public Integer getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    @Override
    public String toString() {
        return "CategoriaDTO{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", imagen='" + imagen + '\'' +
                '}';
    }
}
