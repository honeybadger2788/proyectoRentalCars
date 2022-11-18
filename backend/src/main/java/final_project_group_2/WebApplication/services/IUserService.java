package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.UserDTO;
import final_project_group_2.WebApplication.models.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IUserService {

    List<UserDTO> listUsers();

    ResponseEntity<?> addUser(User user);

    ResponseEntity<?> findById(Integer id);

    ResponseEntity<?> deleteUser(Integer id);

    ResponseEntity<?> updateUser(User user);
}
