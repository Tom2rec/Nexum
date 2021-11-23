package com.io.nexum.model.to;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ConnectionDto {

    private long id;
    private String name;
    private LocalDateTime timeStart;
    private LocalDateTime timeEnd;
    private String additionalInfo;
    private LocationDto location;
    private ActivityDto activity;
}
