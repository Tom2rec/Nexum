package com.io.nexum.model.po;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity

@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
@Data
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUser")
    private long id;

    @Column
    @NotNull
    private String username;

    @Column
    @NotNull
    private String name;

    @Column
    @NotNull
    private String surname;

    @Column
    @NotNull
    private LocalDate dateOfBirth;

    @Column
    @NotNull
    private String city;

    @Column
    @NotNull
    private String email;

    @Column
    @NotNull
    private String password;

    @OneToMany(mappedBy = "user")
    private Set<BoundedConnection> boundedConnections;

    @ManyToMany
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "id_user"),
            inverseJoinColumns = @JoinColumn(name = "id_role")
    )
    private Set<Role> roles = new HashSet<>();

    public User(String username, String name, String surname, LocalDate dateOfBirth, String city, String email, String password) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.city = city;
        this.email = email;
        this.password = password;
    }
}
