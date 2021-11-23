package com.io.nexum.repository;

import com.io.nexum.model.po.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String name);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Query(value = "select * from user where id_user != ?1 order by RAND() LIMIT 3 ", nativeQuery = true)
    List<User> findThreeRandom(long id);
}
