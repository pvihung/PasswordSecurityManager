package main.java.me.authenticate.Authenticator.CS157A.Repository;

import main.java.me.authenticate.Authenticator.CS157A.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
}
