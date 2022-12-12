package final_project_group_2.WebApplication.services;

import final_project_group_2.WebApplication.dto.UserDTO;
import final_project_group_2.WebApplication.exceptions.UsernameException;
import final_project_group_2.WebApplication.models.User;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    List<UserDTO> listUsers();

    ResponseEntity<?> addUser(User user) throws UsernameException;

    ResponseEntity<?> findById(Integer id);

    ResponseEntity<?> deleteUser(Integer id);

    ResponseEntity<?> updateUser(User user);

    Optional<UserDTO> findByEmail(String email);
}
