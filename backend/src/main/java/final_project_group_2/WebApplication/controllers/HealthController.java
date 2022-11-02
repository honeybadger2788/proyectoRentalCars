package final_project_group_2.WebApplication.controllers;

import final_project_group_2.WebApplication.dto.CategoryDTO;
import final_project_group_2.WebApplication.models.Category;
import final_project_group_2.WebApplication.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HealthController {



    //Devolver el listado completo de categorias disponibles
    @GetMapping("/")
    public String health () {
        return "Health OK";
    }


}
