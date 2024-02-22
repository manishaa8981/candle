package com.cosmetobackend.cosmeto.Pojo;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jdk.jfr.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductPojo {
    private Long id;

    @NotEmpty
    private String ProductName;

    @NotEmpty
    private String description;

    @NotEmpty
    private Integer product_price;

    @NotNull
    private String status;

    @NotNull
    private Long category;


}
