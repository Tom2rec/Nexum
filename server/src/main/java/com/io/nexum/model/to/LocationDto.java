package com.io.nexum.model.to;

import lombok.Data;

@Data
public class LocationDto {

    private long id;
    private String address;
    private String locationName;
    private String category;
    private int numberOfPeople;

}
