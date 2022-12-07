
package final_project_group_2.WebApplication.searchs;

import java.sql.Date;
import java.util.Locale.Category;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;

import final_project_group_2.WebApplication.models.Booking;
import final_project_group_2.WebApplication.models.Car;
import final_project_group_2.WebApplication.models.City;

public class CarSpecification implements Specification<Car> {

    public static Specification<Car> allCars(String categoryTitle) {
        
        return (root, query, criteriaBuilder) -> {
            
            return criteriaBuilder.not(criteriaBuilder.isNull(root.get("title")));
        };
            
    } 

    
    public static Specification<Car> carsByCategoryTitle(String categoryTitle) {
        
        return (root, query, criteriaBuilder) -> {
            Join<Car, Category> categoryJoin = root.join("category");
            return criteriaBuilder.equal(categoryJoin.get("title"), categoryTitle);
        };
            
    }

    public static Specification<Car> carsByDate(Date startDate, Date endDate) {
        return (root, query, criteriaBuilder) -> {
            Join<Car, Booking> bookingJoin = root.join("bookings", JoinType.LEFT);
            
            return criteriaBuilder.or(
                criteriaBuilder.and(
                    criteriaBuilder.and(
                        criteriaBuilder.not(criteriaBuilder.between(bookingJoin.get("endDate"), startDate, endDate)),
                        criteriaBuilder.not(criteriaBuilder.between(bookingJoin.get("startDate"), startDate, endDate))
                    ),
                    criteriaBuilder.and(
                        criteriaBuilder.not(criteriaBuilder.and(criteriaBuilder.lessThan(bookingJoin.get("startDate"),startDate), criteriaBuilder.greaterThan(bookingJoin.get("endDate"),endDate))),
                        criteriaBuilder.not(criteriaBuilder.and(criteriaBuilder.greaterThan(bookingJoin.get("startDate"),startDate), criteriaBuilder.lessThan(bookingJoin.get("endDate"),endDate)))
                    )
                ),
                criteriaBuilder.isNull(bookingJoin.get("startDate"))
            );  
        };
    }

    public static Specification<Car> carsByCity(Integer city) {
        return (root, query, criteriaBuilder) -> {
            Join<Car, City> cityJoin = root.join("city");
            return criteriaBuilder.equal(cityJoin.get("id"), city);
            
        };
    }

    @Override
    @Nullable
    public Predicate toPredicate(Root<Car> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        // TODO Auto-generated method stub
        return null;
    }

}

