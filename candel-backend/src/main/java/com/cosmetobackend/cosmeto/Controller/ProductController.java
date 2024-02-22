package com.cosmetobackend.cosmeto.Controller;


import com.cosmetobackend.cosmeto.Entity.Product;
import com.cosmetobackend.cosmeto.Pojo.ProductPojo;
import com.cosmetobackend.cosmeto.Service.ProductService;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("save")
    public String saveUser(@RequestBody ProductPojo productPojo) {
        productService.save(productPojo);
        return "in this section";
    }

    @GetMapping("/getAll")
    public List<Product> getAll() {
        return this.productService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Product> getById(@PathVariable("id") Long id) {
        return this.productService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {

        this.productService.deleteById(id);
    }

}
