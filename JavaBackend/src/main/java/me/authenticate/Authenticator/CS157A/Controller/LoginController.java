package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.Login;
import me.authenticate.Authenticator.CS157A.Service.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LoginController {
    private final LoginService service;

    @PostMapping("/login")
    public Login postMethodName(@RequestBody Login l) {
        // TODO: process POST request
        
        return service.saveLogin(l);
    }
    
    
}
