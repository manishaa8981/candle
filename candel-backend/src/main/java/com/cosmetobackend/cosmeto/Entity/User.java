package com.cosmetobackend.cosmeto.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.userdetails.UserDetails;


@Entity
@Table(name="users")
@Getter
@Setter
public class User {
    @Id
    @SequenceGenerator(name = "users_seq_gen", sequenceName = "users_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "users_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="user_name", nullable=false)
    private String username;

    @Column(name="email", nullable=false)
    private String email;

    @Column(name="password", nullable=false)
    private String password;

    @Column(name="ContactNumber",nullable = false)
    private Integer contactNumber;







}

