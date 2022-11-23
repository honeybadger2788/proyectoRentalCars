package final_project_group_2.WebApplication.models;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public record AuthenticationResponse(String jwt, int id, String firstName, String lastName, String email, Collection<? extends GrantedAuthority> authorities) {
}
