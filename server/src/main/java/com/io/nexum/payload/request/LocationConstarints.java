package com.io.nexum.payload.request;

import lombok.Data;

@Data
public class LocationConstarints {
    private String address;
    private String category;
    private int numberOfPeople;
}
