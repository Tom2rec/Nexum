package com.io.nexum.controller;

import com.io.nexum.model.mappers.ConnectionMapper;
import com.io.nexum.model.po.Connection;
import com.io.nexum.repository.ConnectionRepository;
import com.io.nexum.security.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/connections")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ConnectionController {

    private final ConnectionRepository connectionRepository;


    @Autowired
    public ConnectionController(ConnectionRepository connectionRepository) {
        this.connectionRepository = connectionRepository;
    }

    @GetMapping
    public ResponseEntity<?> getBoundedConnections() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        long userId = userDetails.getId();

        return ResponseEntity.ok(
            connectionRepository.findConnectionsByUserId(userId).stream()
                    .map(item -> ConnectionMapper.INSTANCE.toDto(item))
                    .collect(Collectors.toList())

        );
    }

    @GetMapping("/{connectionId}")
    public ResponseEntity<?> getBoundedConnection(@PathVariable String connectionId) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        long userId = userDetails.getId();

        return ResponseEntity.ok(
                ConnectionMapper.INSTANCE.toDto(connectionRepository
                        .findConnectionByUserIdAndConnectionId(userId, Long.valueOf(connectionId)))
        );
    }
}
