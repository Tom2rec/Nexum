package com.io.nexum.controller;

import com.io.nexum.model.mappers.ConnectionMapper;
import com.io.nexum.model.to.ConnectionDto;
import com.io.nexum.repository.ConnectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recommendation")
@CrossOrigin(origins = "*", maxAge = 3600)
@PreAuthorize("hasRole('USER')")
public class RecommendationController {

    private final ConnectionRepository connectionRepository;

    @Autowired
    public RecommendationController(ConnectionRepository connectionRepository) {
        this.connectionRepository = connectionRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRecommendedConnectionInfo(@PathVariable String id){
        return ResponseEntity.ok(ConnectionMapper.INSTANCE.toDto(connectionRepository.findConnectionById(Long.valueOf(id))));
    }
}
