package com.io.nexum.model.po;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "Roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idRole")
    private long id;

    @Enumerated(EnumType.STRING)
    private ERole role;

}
