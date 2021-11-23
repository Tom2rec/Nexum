package com.io.nexum.controller;

import com.io.nexum.model.mappers.ConnectionMapper;
import com.io.nexum.model.mappers.UserMapper;
import com.io.nexum.model.to.ConnectionDto;
import com.io.nexum.model.to.UserDto;
import com.io.nexum.repository.ConnectionRepository;
import com.io.nexum.repository.UserRepository;
import com.io.nexum.security.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequestMapping("/")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class MainPageController {

    private final UserRepository userRepository;
    private final ConnectionRepository connectionRepository;

    @Autowired
    public MainPageController(UserRepository userRepository, ConnectionRepository connectionRepository) {
        this.userRepository = userRepository;
        this.connectionRepository = connectionRepository;
    }

    @GetMapping
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getMainPageComponents(){

        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();

        long userId = userDetails.getId();
        Map<String,Object> mainPageComponents = new HashMap<>();

        mainPageComponents.put("recentActivity",getRecentActivity(userId));
        mainPageComponents.put("recommendations", getRecommendation(userId));
        mainPageComponents.put("friends",getNewFriends(userId));


        return ResponseEntity.ok(mainPageComponents);
    }

    public List<ConnectionDto> getRecentActivity(long id){
        return connectionRepository.findConnectionsByUserIdLimitThree(id).stream()
                .map(item -> ConnectionMapper.INSTANCE.toDto(item))
                .collect(Collectors.toList());
    }

    public List<ConnectionDto> getRecommendation(long id){
        return connectionRepository.findConnectionsByAdress(id).stream()
                .map(item -> ConnectionMapper.INSTANCE.toDto(item))
                .collect(Collectors.toList());
    }

    public List<UserDto> getNewFriends(long id){
        return userRepository.findThreeRandom(id).stream()
                .map(item -> UserMapper.INSTANCE.toDto(item))
                .collect(Collectors.toList());
    }

}
