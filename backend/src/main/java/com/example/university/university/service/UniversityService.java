package com.example.university.university.service;

import com.example.university.university.model.University;
import com.example.university.university.repository.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class UniversityService {

    private final UniversityRepository universityRepository;

    public List<University> findAll() {
        return universityRepository.findAll();
    }

    public Set<String> getAllCountries() {
        Set<String> countries = new HashSet<>();
        universityRepository.findAll().stream().forEach(faculty -> countries.add(faculty.getCountry()));
        return countries;
    }

    public Set<String> getAllCities(Set<String> countries) {
        Set<String> cities = new HashSet<>();
        universityRepository.findAll().stream().filter(faculty -> countries.contains(faculty.getCountry())).forEach(faculty -> cities.add(faculty.getCity()));
        return cities;
    }

}
