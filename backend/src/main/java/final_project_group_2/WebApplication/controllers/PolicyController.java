package final_project_group_2.WebApplication.controllers;

import final_project_group_2.WebApplication.dto.PolicyDTO;
import final_project_group_2.WebApplication.models.Policy;
import final_project_group_2.WebApplication.services.IPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://s3-0222ftc1-grupo2-frontend.s3-website.us-east-2.amazonaws.com"})
@RequestMapping("/policies")
public class PolicyController {

    //Inicializo "policyService" con todos los metodos implementados
    @Autowired
    IPolicyService policyService;


    //Devolver el listado completo de políticas disponibles
    @GetMapping
    public List<PolicyDTO> listPoliciesController() {
        return policyService.listPolicies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPolicyById(@PathVariable int id) {
        return policyService.findById(id);
    }


    //Agregar una nueva política
    @PostMapping("/add")
    public ResponseEntity<?> addPolicy(@RequestBody Policy policy){

        return policyService.addPolicy(policy);
    }


    //Eliminar una política
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePolicy(@PathVariable Integer id){
        return policyService.deletePolicy(id);
    }


    //Editar una política
    @PutMapping("/update")
    public ResponseEntity<?> updatePolicy(@RequestBody Policy policy){
        return policyService.updatePolicy(policy);
    }

}
