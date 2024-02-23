package com.example.university.user.controller;

import com.example.university.user.model.dto.UserDto;
import com.example.university.user.model.entity.User;
import com.example.university.user.model.response.UserResponse;
import com.example.university.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<UserResponse>> findAll() {
        List<UserResponse> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("{id}")
    public ResponseEntity<UserResponse> findById(@PathVariable Long id) {
        UserResponse user = userService.findById(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping
    public ResponseEntity<UserResponse> insert(@RequestBody UserDto userDto) {
        UserResponse user = userService.insert(userDto);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/add")
    public ResponseEntity<UserResponse> add(@RequestBody User user) {
        UserResponse userResponse = userService.addUser(user);
        return new ResponseEntity<>(userResponse, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<UserResponse> update(@RequestBody UserDto userDto) {
        UserResponse user = userService.update(userDto);
        return ResponseEntity.ok(user);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        userService.delete(id);
    }

}
