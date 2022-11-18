package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.UserDTO;
import final_project_group_2.WebApplication.models.User;
import final_project_group_2.WebApplication.repositories.IUserRepository;
import final_project_group_2.WebApplication.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public List<UserDTO> listUsers() {
        List<UserDTO> listUsersDTO = new ArrayList<>();
        List<User> listUsers = userRepository.findAll();
        for (User user: listUsers) {
            listUsersDTO.add(mapper.convertValue(user, UserDTO.class));
        }
        return listUsersDTO;
    }

    @Override
    public ResponseEntity<?> addUser(User newUser) {
        if (userRepository.save(newUser) != null) return ResponseEntity.ok(HttpStatus.OK);
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }

    @Override
    public ResponseEntity<?> findById(Integer id) {
        UserDTO foundUser = mapper.convertValue(userRepository.findById(id).get(), UserDTO.class);
        if (foundUser !=null){
            return new ResponseEntity<UserDTO>(foundUser, HttpStatus.OK);
        }else{
            return new ResponseEntity("No se encontró el usuario solicitado.", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> deleteUser(Integer id) {
        if(userRepository.findById(id).isPresent()) {
            userRepository.deleteById(id);
            return new ResponseEntity("El usuario con id " + id + " ha sido eliminado.", HttpStatus.OK);
        }
        return new ResponseEntity("El usuario con id " + id + " no existe.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updateUser(User userToUpdate) {
        if(userRepository.findById(userToUpdate.getId()).isPresent()) {
            userRepository.save(userToUpdate);
            return new ResponseEntity("El usuario con id " + userToUpdate.getId() + " ha sido modificado.", HttpStatus.OK);
        }else{
            return new ResponseEntity("El usuario con id " + userToUpdate.getId() + " no existe.", HttpStatus.NOT_FOUND);
        }
    }
}
