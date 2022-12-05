package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.CustomerDTO;
import final_project_group_2.WebApplication.dto.UserDTO;
import final_project_group_2.WebApplication.models.User;
import final_project_group_2.WebApplication.repositories.IUserRepository;
import final_project_group_2.WebApplication.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserService implements IUserService, UserDetailsService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    BookingService bookingService;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

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
        var user = new User();
        user.setFirstName(newUser.getFirstName());
        user.setLastName(newUser.getLastName());
        user.setEmail(newUser.getEmail());
        user.setPassword(passwordEncoder.encode(newUser.getPassword()));
        user.setCity(newUser.getCity());
        user.setRole(newUser.getRole());
        if (userRepository.save(user) != null) return new ResponseEntity<>(HttpStatus.CREATED);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> findById(Integer id) {
        User foundUser = userRepository.findById(id).get();
        if (foundUser !=null) {
            if(foundUser.getRole().getId() == 2){
                CustomerDTO user = mapper.convertValue(userRepository.findById(id).get(), CustomerDTO.class);
                user.setBookings(bookingService.listByUserId(user.getId()));
                return new ResponseEntity<CustomerDTO>(user, HttpStatus.OK);
            }else{
                UserDTO user = mapper.convertValue(userRepository.findById(id).get(), UserDTO.class);
                return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
            }

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



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username).orElseThrow((()-> new UsernameNotFoundException("User Not Found")));
        return UserDetailsImpl.build(user);
    }
}
