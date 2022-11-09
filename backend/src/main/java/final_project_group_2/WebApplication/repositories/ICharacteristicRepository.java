package final_project_group_2.WebApplication.repositories;

import final_project_group_2.WebApplication.models.Characteristic;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ICharacteristicRepository extends JpaRepository<Characteristic, Integer> {
    
}
