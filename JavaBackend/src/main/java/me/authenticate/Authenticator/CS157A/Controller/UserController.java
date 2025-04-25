package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.LoginDTO;
import me.authenticate.Authenticator.CS157A.Entity.User;
import me.authenticate.Authenticator.CS157A.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    private final UserService service;

    @PostMapping("/user")
    public User saveUser(@RequestBody User u) {
        return service.saveUser(u);
    }

    @PostMapping("/verifylogin")
    public ResponseEntity<?> accountExists(@RequestBody LoginDTO loginInstance) {
        boolean exists = service.accountExists(loginInstance.getUsername(), loginInstance.getPassword());
        if (exists) {
            return ResponseEntity.ok().body("Yeah the account is there. You're good.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Incorrect username or password.");
        }
    }
}
