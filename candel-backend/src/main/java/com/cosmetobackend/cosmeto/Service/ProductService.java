package com.cosmetobackend.cosmeto.Service;


import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Pojo.ProductPojo;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    String save(ProductPojo productPojo);

    List<Product> getAll();

    void deleteById(Long id);

    Optional<Product> getById(Long id);

}
