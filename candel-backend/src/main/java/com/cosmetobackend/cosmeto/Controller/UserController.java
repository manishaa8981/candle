package com.cosmetobackend.cosmeto.Controller;

import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.UserPojo;
import com.cosmetobackend.cosmeto.Service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/save")
    public String save(@Valid @RequestBody UserPojo userPojo){
        userService.save(userPojo);
        return "Register successfully";
    }

    @GetMapping("/getAll")
    public List<User> getAll(){
        return this.userService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<User> getById(@PathVariable("id") Long id){
        return this.userService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id){
        this.userService.deleteById(id);
    }

    @GetMapping("/getByEmail/{email}")
        public Optional<User> getByEmail(@PathVariable("email") String email){
        return this.userService.getByEmail(email);
    }

}
