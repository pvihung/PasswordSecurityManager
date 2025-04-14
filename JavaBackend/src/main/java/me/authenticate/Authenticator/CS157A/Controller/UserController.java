package main.java.me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import main.java.me.authenticate.Authenticator.CS157A.Entity.User;
import main.java.me.authenticate.Authenticator.CS157A.Service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping("/user")
    public User saveUser(@RequestBody User u) {
        return service.saveUser(u);
    }
}
