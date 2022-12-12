package final_project_group_2.WebApplication.controllers;

import final_project_group_2.WebApplication.models.Role;
import final_project_group_2.WebApplication.services.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    IRoleService roleService;


    @GetMapping
    public List<Role> listRolesController() {
        return roleService.listRoles();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addRole(@RequestBody Role role){

        return roleService.addRole(role);
    }
}
