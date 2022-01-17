package com.io.nexum.model.po;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Data
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idActivity")
    private long id;

    @Column
    @NotNull
    private String name;

    @Column
    @NotNull
    private String category;

    @Column
    @NotNull
    private String subCategory;

    @OneToMany(mappedBy = "activity")
    private Set<Connection> connections;
}
