package me.authenticate.Authenticator.CS157A.Repository;

import me.authenticate.Authenticator.CS157A.Entity.ForgotRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForgotRequestRepo extends JpaRepository<ForgotRequest, Integer> {
}
