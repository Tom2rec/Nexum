package com.io.nexum.controller;

import com.io.nexum.model.mappers.LocationMapper;
import com.io.nexum.model.po.Location;
import com.io.nexum.model.to.LocationDto;
import com.io.nexum.payload.request.LocationConstarints;
import com.io.nexum.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/locations")
@CrossOrigin(origins = "*", maxAge = 3600)
public class LocationController {

    private final LocationRepository locationRepository;

    @Autowired
    public LocationController(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }


    @PostMapping
    public ResponseEntity<?> findLocations(@Valid @RequestBody LocationConstarints locationConstarints){
        List<Location> locations = locationRepository.findByAddressAndCategoryAndNumberOfPeopleIsGreaterThanEqual(
                locationConstarints.getAddress(),
                locationConstarints.getCategory(),
                locationConstarints.getNumberOfPeople());
        return ResponseEntity.ok(
                locations.stream().map(item -> LocationMapper.INSTANCE.toDto(item)).collect(Collectors.toList())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getLocation(@PathVariable String id){
        return ResponseEntity.ok(
                LocationMapper.INSTANCE.toDto(locationRepository.getById(Long.valueOf(id)))
        );
    }

    @GetMapping()
    public ResponseEntity<?> getAllLocations(){
        List<LocationDto> locations = locationRepository.findAll().stream()
                .map(item -> LocationMapper.INSTANCE.toDto(item))
                .collect(Collectors.toList());

        return ResponseEntity.ok(locations);
    }
}
