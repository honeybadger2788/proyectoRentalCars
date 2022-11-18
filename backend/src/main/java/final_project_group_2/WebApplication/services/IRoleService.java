package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.models.Role;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IRoleService {

    ResponseEntity<?> addRole(Role role);

    List<Role> listRoles();
}
