package com.io.nexum.model.po;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Data
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
public class Host {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_host")
    private long id;

    @Column
    @NotNull
    private String username;

    @Column
    @NotNull
    private String password;

    @Column
    @NotNull
    private String name;

    @Column
    @NotNull
    private String email;

    @Column
    @NotNull
    private String surname;

    @JsonIgnore
    @OneToMany(mappedBy = "host")
    private Set<Location> locations;

    @JsonIgnore
    @ManyToMany
    @JoinColumn(name = "idRole")
    private Set<Role> roles;
}
