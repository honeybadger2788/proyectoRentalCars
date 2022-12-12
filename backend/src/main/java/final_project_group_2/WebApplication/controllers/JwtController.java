package final_project_group_2.WebApplication.controllers;

import final_project_group_2.WebApplication.exceptions.BadCredentialsException;
import final_project_group_2.WebApplication.jwt.JwtUtil;
import final_project_group_2.WebApplication.models.AuthenticationRequest;
import final_project_group_2.WebApplication.models.AuthenticationResponse;
import final_project_group_2.WebApplication.models.UserDetailsImpl;
import final_project_group_2.WebApplication.services.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
public class JwtController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

@RequestMapping(value = "/login",method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest request) throws BadCredentialsException {
    Authentication authentication;

    try {
        authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
    } catch (Exception e) {
        throw new BadCredentialsException("Credenciales inválidas");
    }

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtil.generateToken(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

    return ResponseEntity.ok(new AuthenticationResponse(jwt,
            userDetails.getId(),
            userDetails.getFirstName(),
            userDetails.getLastName(),
            userDetails.getUsername(),
            userDetails.getAuthorities()));
    }
}
