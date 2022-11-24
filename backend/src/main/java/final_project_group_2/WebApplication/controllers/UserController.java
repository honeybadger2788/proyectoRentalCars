package final_project_group_2.WebApplication.controllers;

import final_project_group_2.WebApplication.dto.UserDTO;
import final_project_group_2.WebApplication.jwt.JwtUtil;
import final_project_group_2.WebApplication.models.AuthenticationResponse;
import final_project_group_2.WebApplication.models.User;
import final_project_group_2.WebApplication.services.IUserService;
import final_project_group_2.WebApplication.services.impl.UserDetailsImpl;
import final_project_group_2.WebApplication.services.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/users")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;


    //Devolver el listado completo de usuarios
    @GetMapping
    public List<UserDTO> listUsersController() {
        return userService.listUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCarById(@PathVariable int id) {
        return userService.findById(id);
    }

    //Agregar un usuario
    @PostMapping("/signup")
    public ResponseEntity<?> addUser(@RequestBody User user){
        // NO FUNCIONA LA GENERACIÓN DE TOKEN AL REGISTRAR UN NUEVO USUARIO
        /*Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtil.generateToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();*/

        return new ResponseEntity<>(userService.addUser(user), HttpStatus.CREATED);
    }


    //Eliminar un usuario
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id){
        return userService.deleteUser(id);
    }


    //Editar un usuario
    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }
}
