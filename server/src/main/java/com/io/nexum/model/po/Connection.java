package com.io.nexum.model.po;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Data
public class Connection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idConnection")
    private long id;

    @Column
    @NotNull
    private String name;

    @Column
    @NotNull
    private LocalDateTime timeStart;

    @Column
    @NotNull
    private LocalDateTime timeEnd;

    @Column
    @NotNull
    private String additionalInfo;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "idLocation", nullable = false)
    private Location location;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "idActivity", nullable = false)
    private Activity activity;

    @OneToMany(mappedBy = "connection")
    @JsonIgnore
    private Set<BoundedConnection> boundedConnections;
}
