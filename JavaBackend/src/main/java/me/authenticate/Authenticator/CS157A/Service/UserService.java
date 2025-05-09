package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.User;
import me.authenticate.Authenticator.CS157A.Entity.UserDTO;
import me.authenticate.Authenticator.CS157A.Repository.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepo repo;

    public ResponseEntity<Void> saveUser(UserDTO u) {
        if (!(repo.existsByEmail(u.getEmail()) || repo.existsByUsername(u.getUsername()))) {
            User newU = new User();
            newU.setUsername(u.getUsername());
            newU.setEmail(u.getEmail());
            newU.setMasterPass(u.getMasterPass());
            repo.save(newU);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
    }

    public int accountExists(String username, String password) {
        Optional<User> u = repo.findUserByUsername(username);

        if ((u.isPresent()) && u.get().getMasterPass().equals(password)) {
            return u.get().getUserID();
        }
        return 0;
    }

    public ResponseEntity<Void> modifyPassword(String newPass, String email) {
        repo.findUserByEmail(email).get().setMasterPass(newPass);
        return ResponseEntity.ok().build();
    }
}
