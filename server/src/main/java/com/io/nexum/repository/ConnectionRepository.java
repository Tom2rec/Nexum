package com.io.nexum.repository;

import com.io.nexum.model.po.Connection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface ConnectionRepository extends JpaRepository<Connection, Long> {
    @Query(value = "select * from connection c inner join " +
            "(select id_connection from bounded_connection b where b.id_user = ?1) sub " +
            "on c.id_connection = sub.id_connection limit 3", nativeQuery = true)
    List<Connection> findConnectionsByUserIdLimitThree(Long userId);

    @Query(value = "select * from connection c inner join location l on " +
            "c.id_location = l.id inner join bounded_connection b on " +
            "b.id_connection = c.id_connection where " +
            "b.id_user != ?1 and l.address = (select u.city from user u where id_user = ?1)", nativeQuery = true)
    List<Connection> findConnectionsByAdress(long id);

    Connection findConnectionById(Long id);

    @Query(value = "select * from connection c inner join " +
            "(select id_connection from bounded_connection b where b.id_user = ?1) sub " +
            "on c.id_connection = sub.id_connection", nativeQuery = true)
    List<Connection> findConnectionsByUserId(Long userId);

    @Query(value = "select * from connection c inner join bounded_connection b on " +
            "c.id_connection = b.id_connection where c.id_connection = ?2 AND b.id_user = ?1", nativeQuery = true)
    Connection findConnectionByUserIdAndConnectionId(Long userId, Long connectionId);


}
