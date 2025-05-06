package me.authenticate.Authenticator.CS157A.Repository;

import me.authenticate.Authenticator.CS157A.Entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LoginRepo extends JpaRepository<Login, Integer> {
    List<Login> findByUserUserID(int userid);
}
