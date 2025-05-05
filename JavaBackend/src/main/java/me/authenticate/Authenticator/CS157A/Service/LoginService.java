package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.Login;
import me.authenticate.Authenticator.CS157A.Entity.LoginDTO;
import me.authenticate.Authenticator.CS157A.Repository.LoginRepo;
import me.authenticate.Authenticator.CS157A.Repository.UserRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final LoginRepo repo;
    private final UserRepo userList;

    public ResponseEntity<Void> saveLogin(LoginDTO l) {
        Login log = new Login();
        log.setUser(userList.findById(l.getUserid()).get());
        log.setIPAdd(l.getIPAdd());
        repo.save(log);
        return ResponseEntity.noContent().build();
    }
    
}
