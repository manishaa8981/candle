package com.cosmetobackend.cosmeto.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@SuppressWarnings("JpaAttributeTypeInspection")
@Entity
@Table(name="products")
@Getter
@Setter
public class Product {

    @Id
    @SequenceGenerator(name = "product_seq_gen", sequenceName = "product_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "product_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="Product_name", nullable=false)
    private String ProductName;

    @Column(name="description", nullable=false)
    private String productDescription;

    @Column(name="product_price", nullable=false)
    private Integer productPrice;

    @Column(name="status", nullable=false)
    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id", referencedColumnName = "id")
    private Category category;

    





}
