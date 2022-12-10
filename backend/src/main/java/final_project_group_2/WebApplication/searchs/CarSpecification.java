
package final_project_group_2.WebApplication.searchs;

import java.util.Date;
import java.util.Locale.Category;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.SetJoin;
import javax.persistence.criteria.Subquery;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;

import final_project_group_2.WebApplication.models.Booking;
import final_project_group_2.WebApplication.models.Car;
import final_project_group_2.WebApplication.models.City;

public class CarSpecification implements Specification<Car> {

    public static Specification<Car> allCars() {
        
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
            Subquery <Long> carSubquery = query.subquery(Long.class);
            final Root<Car> carSubQueryRoot = carSubquery.from(Car.class);
            SetJoin<Car, Booking> bookingJoin = carSubQueryRoot.joinSet("bookings");
            carSubquery.select(carSubQueryRoot.get("id"));
            carSubquery.where(
                criteriaBuilder.and(
                criteriaBuilder.greaterThanOrEqualTo(bookingJoin.get("endDate"), startDate),
                criteriaBuilder.lessThanOrEqualTo(bookingJoin.get("startDate"),endDate)
                )
            );

            Predicate predicate = root.get("id").in(carSubquery);
            return criteriaBuilder.not(predicate);
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


