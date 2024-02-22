package com.cosmetobackend.cosmeto.Service.Impl;

import com.cosmetobackend.cosmeto.Entity.Category;
import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Pojo.ProductPojo;
import com.cosmetobackend.cosmeto.Repo.CategoryRepository;
import com.cosmetobackend.cosmeto.Repo.ProductRepository;
import com.cosmetobackend.cosmeto.Service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {


    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public String save(ProductPojo productPojo) {
        Product product= new Product();

        if (productPojo.getId() != null) {
             product = productRepository.findById(productPojo.getId()).get();
        }

        Category category=categoryRepository.findById(productPojo.getCategory()).get();

        product.setCategory(category);
        product.setStatus(productPojo.getStatus());
        product.setProductPrice(productPojo.getProduct_price());
        product.setProductDescription(productPojo.getDescription());
        product.setProductName(productPojo.getProductName());

        productRepository.save(product); // insert query
        return null;
    }

    @Override
    public List<Product> getAll() {

        return productRepository.findAll(); // select * from users
    }

    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id); // delete from users where id =?1
    }

    @Override
    public Optional<Product> getById(Long id) {
        return productRepository.findById(id);
    }

}
