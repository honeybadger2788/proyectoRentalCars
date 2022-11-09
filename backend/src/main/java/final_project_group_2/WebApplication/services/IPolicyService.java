package final_project_group_2.WebApplication.services;


import final_project_group_2.WebApplication.dto.PolicyDTO;
import final_project_group_2.WebApplication.models.Policy;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IPolicyService {
    List<PolicyDTO> listPolicies();

    ResponseEntity<?> findById(Integer id);

    ResponseEntity<?> addPolicy(Policy policy);

    ResponseEntity<?> deletePolicy(Integer id);

    ResponseEntity<?> updatePolicy(Policy policy);
}
