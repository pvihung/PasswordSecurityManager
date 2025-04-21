package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.Login;
import me.authenticate.Authenticator.CS157A.Repository.LoginRepo;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final LoginRepo repo;

    public Login saveLogin(Login l) {
        return repo.save(l);
    }
    
}
