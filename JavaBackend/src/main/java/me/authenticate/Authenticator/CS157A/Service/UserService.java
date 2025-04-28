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

    public int accountExists(String username, String password) {
        Optional<User> u = repo.findUserByUsername(username);

        if ((u.isPresent()) && u.get().getMasterPass().equals(password)) {
            return u.get().getUserID();
        }
        return 0;
    }
}
