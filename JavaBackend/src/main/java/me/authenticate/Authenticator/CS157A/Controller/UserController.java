package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.LoginCredentialsDTO;
import me.authenticate.Authenticator.CS157A.Entity.UserDTO;
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
    public ResponseEntity<Void> saveUser(@RequestBody UserDTO u) {
        return service.saveUser(u);
    }

    @PostMapping("/verifylogin")
    public ResponseEntity<?> accountExists(@RequestBody LoginCredentialsDTO loginInstance) {
        int exists = service.accountExists(loginInstance.getUsername(), loginInstance.getPassword());
        if (exists != 0) {
            return ResponseEntity.ok().body(exists);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Incorrect username or password.");
        }
    }
}
