package com.io.nexum.model.to;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UserDto {

    private long id;
    private String username;
    private String name;
    private LocalDate dateOfBirth;
    private String city;
}
