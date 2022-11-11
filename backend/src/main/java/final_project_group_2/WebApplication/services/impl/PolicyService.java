package final_project_group_2.WebApplication.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import final_project_group_2.WebApplication.dto.PolicyDTO;
import final_project_group_2.WebApplication.models.Policy;
import final_project_group_2.WebApplication.repositories.IPolicyRepository;
import final_project_group_2.WebApplication.services.IPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PolicyService implements IPolicyService {

    @Autowired
    IPolicyRepository policyRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public List<PolicyDTO> listPolicies() {
        List<PolicyDTO> listPoliciesDTO = new ArrayList<>();
        List<Policy> listPolicies = policyRepository.findAll();
        for (Policy policy : listPolicies) {
            listPoliciesDTO.add(mapper.convertValue(policy, PolicyDTO.class));
        }
        return listPoliciesDTO;
    }

    @Override
    public ResponseEntity<?> findById(Integer id) {
        PolicyDTO foundPolicy = mapper.convertValue(policyRepository.findById(id).get(), PolicyDTO.class);
        if (foundPolicy !=null){
            return new ResponseEntity<PolicyDTO>(foundPolicy, HttpStatus.OK);
        }else{
            return new ResponseEntity("No se encontró la política solicitada.", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> addPolicy(Policy newPolicy) {
        if (policyRepository.save(newPolicy) != null) return ResponseEntity.ok(HttpStatus.OK);
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }

    @Override
    public ResponseEntity<?> deletePolicy(Integer id) {
        if(policyRepository.findById(id).isPresent()) {
            policyRepository.deleteById(id);
            return new ResponseEntity("La política con id " + id + " ha sido eliminada.", HttpStatus.OK);
        }
        return new ResponseEntity("La política con id " + id + " no existe.", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> updatePolicy(Policy policyToUpdate) {
        if(policyRepository.findById(policyToUpdate.getId()).isPresent()) {
            policyRepository.save(policyToUpdate);
            return new ResponseEntity("La política con id " + policyToUpdate.getId() + " ha sido modificada.", HttpStatus.OK);
        }else{
            return new ResponseEntity("La política con id " + policyToUpdate.getId() + " no existe.", HttpStatus.NOT_FOUND);
        }
    }
}
