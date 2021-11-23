package com.io.nexum.model.po;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Data
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    @NotNull
    private String address;

    @Column
    @NotNull
    private String locationName;

    @Column
    @NotNull
    private String category;

    @Column
    @NotNull
    private int numberOfPeople;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "idHost", nullable = false)
    private Host host;

    @OneToMany(mappedBy = "location")
    private Set<Connection> connections;

}
