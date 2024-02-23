package com.example.university.university.model;

import com.example.university.classification.model.Classification;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class University {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String address;

    private String city;

    private String postalCode;

    private String country;

    private String phoneNumber;

    private String website;

    private String email;

    private boolean type;

    private String coordinates;

    @ManyToOne
    @JoinColumn(name = "classification_id")
    private Classification classification;


}
