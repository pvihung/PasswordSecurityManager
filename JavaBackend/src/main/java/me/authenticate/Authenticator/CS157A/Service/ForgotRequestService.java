package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.ForgotRequest;
import me.authenticate.Authenticator.CS157A.Repository.ForgotRequestRepo;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ForgotRequestService {
    private final ForgotRequestRepo repo;

    public ForgotRequest recordRequest(ForgotRequest f) {
        return repo.save(f);
    }
}
