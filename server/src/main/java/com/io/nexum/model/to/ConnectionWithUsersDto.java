package com.io.nexum.model.to;

import lombok.Data;

@Data
public class ConnectionWithUsersDto {

    private ConnectionDto connection;
    private UserDto user;

}
