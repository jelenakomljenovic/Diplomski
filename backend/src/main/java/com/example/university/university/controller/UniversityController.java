package com.example.university.university.controller;

import com.example.university.university.model.University;
import com.example.university.university.service.UniversityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@RestController
@RequestMapping("/faculties")
public class UniversityController {

    private final UniversityService universityService;

    @GetMapping
    public ResponseEntity<List<University>> getAllFaculties() {
        List<University> facultiesList = universityService.findAll();
        return ResponseEntity.ok(facultiesList);
    }

    @GetMapping("/countries")
    public ResponseEntity<Set<String>> getAllCountries() {
        Set<String> countriesList = universityService.getAllCountries();
        return ResponseEntity.ok(countriesList);
    }

    @PostMapping("/cities")
    public ResponseEntity<Set<String>> getAllCities(@RequestBody Set<String> countries) {
        Set<String> citiesList = universityService.getAllCities(countries);
        return ResponseEntity.ok(citiesList);
    }

}
