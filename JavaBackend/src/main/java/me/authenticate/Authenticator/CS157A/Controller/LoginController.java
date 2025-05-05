package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.LoginDTO;
import me.authenticate.Authenticator.CS157A.Service.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")
public class LoginController {
    private final LoginService service;

    @PostMapping("/save-login")
    public ResponseEntity<Void> saveLogin(@RequestBody LoginDTO l) {
        System.out.println(l.getIPAdd());
        return service.saveLogin(l);
    }
    
    
}
