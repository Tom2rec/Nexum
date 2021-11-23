package com.io.nexum.model.to;

import lombok.Data;

import java.util.Set;

@Data
public class HostDto {
    private String username;
    private String password;
    private Set<LocationDto> locations;
}
