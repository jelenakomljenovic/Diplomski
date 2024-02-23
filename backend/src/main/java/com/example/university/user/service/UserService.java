package com.example.university.user.service;

import com.example.university.exception.ResourceNotFoundException;
import com.example.university.exception.UserNotFoundException;
import com.example.university.role.model.entity.Role;
import com.example.university.role.model.enums.RoleEnum;
import com.example.university.role.repository.RoleRepository;
import com.example.university.user.model.dto.UserDto;
import com.example.university.user.model.entity.User;
import com.example.university.user.model.mapper.UserMapper;
import com.example.university.user.model.response.UserResponse;
import com.example.university.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@Transactional
@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    public List<UserResponse> findAll() {
        List<User> users = userRepository.findAll();
        return userMapper.toResponses(users);
    }

    public UserResponse findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
        return userMapper.toResponse(user);
    }

    public UserResponse insert(UserDto userDto) {
        return saveUser(userDto);
    }

    public UserResponse addUser(User user) {
        String password = user.getPassword() != null ? passwordEncoder.encode(user.getPassword()) : null;
        user.setPassword(password);

        user = userRepository.saveAndFlush(user);
        return userMapper.toResponse(user);
    }

    public UserResponse update(UserDto userDto) {
        if (!userRepository.existsById(userDto.getId())) {
            throw new UserNotFoundException(userDto.getId());
        }
        return saveUser(userDto);
    }

    private UserResponse saveUser(UserDto userDto) {
        User user = userMapper.fromDto(userDto);
        if (user.getRoles() == null || user.getRoles().isEmpty()) {
            setDefaultUserRole(user);
        }
        String password = user.getPassword() != null ? passwordEncoder.encode(user.getPassword()) : null;
        user.setPassword(password);

        user = userRepository.saveAndFlush(user);

        return userMapper.toResponse(user);
    }

    private void setDefaultUserRole(User updatedUser) {
        Role userRole = roleRepository.findByName(RoleEnum.USER.toString())
                .orElseThrow(() -> new ResourceNotFoundException("Role " + RoleEnum.USER + " not found"));
        updatedUser.setRoles(Set.of(userRole));
    }

    public void delete(Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
    }

}
