package main.java.me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import main.java.me.authenticate.Authenticator.CS157A.Entity.User;
import main.java.me.authenticate.Authenticator.CS157A.Repository.UserRepo;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private UserRepo repo;

    public User saveUser(User u) {
        return repo.save(u);
    }
}
