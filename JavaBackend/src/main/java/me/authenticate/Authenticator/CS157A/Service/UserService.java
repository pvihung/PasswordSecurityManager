package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.User;
import me.authenticate.Authenticator.CS157A.Repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepo repo;

    public User saveUser(User u) {
        return repo.save(u);
    }

    public boolean accountExists(String username, String password) {
        Optional<User> u = repo.findUserByUsername(username);
        return u.map(user -> user.getMasterPass().equals(password)).orElse(false);
    }
}
