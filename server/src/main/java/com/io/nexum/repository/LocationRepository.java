package com.io.nexum.repository;

import com.io.nexum.model.po.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {

    List<Location> findAll();

    List<Location> findByAddressAndCategoryAndNumberOfPeopleIsGreaterThanEqual(String address,
                                                                               String category, int numberOfPeople);
}
