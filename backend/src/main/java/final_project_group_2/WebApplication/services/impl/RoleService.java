package final_project_group_2.WebApplication.services.impl;

import final_project_group_2.WebApplication.models.Role;
import final_project_group_2.WebApplication.repositories.IRoleRepository;
import final_project_group_2.WebApplication.services.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService implements IRoleService{

    @Autowired
    IRoleRepository roleRepository;

    @Override
    public ResponseEntity<?> addRole(Role newRole) {
        if (roleRepository.save(newRole) != null) return ResponseEntity.ok(HttpStatus.CREATED);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public List<Role> listRoles() {
        return roleRepository.findAll();
    }
}
