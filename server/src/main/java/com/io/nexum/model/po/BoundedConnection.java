package com.io.nexum.model.po;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class BoundedConnection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idBoundedConnection")
    private long id;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "idConnection", nullable = false)
    private Connection connection;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "idUser", nullable = false)
    private User user;
}
