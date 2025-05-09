package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.ForgotRequest;
import me.authenticate.Authenticator.CS157A.Repository.ForgotRequestRepo;
import me.authenticate.Authenticator.CS157A.Repository.UserRepo;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ForgotRequestService {
    private final ForgotRequestRepo repo;
    private final UserRepo userList;

    public boolean verifyEmail(String email) {
        String trimmed = email.trim();
        return userList.existsByEmail(trimmed);
    }

    public String recordRequest(String email) {
        ForgotRequest f = new ForgotRequest();
        f.setSentTo(email);
        f.setUser(userList.findUserByEmail(email).get());
        repo.save(f);
        return f.getResetToken();
    }

    public boolean verifyCode(String code, String email) {
        if (repo.existsByResetToken(code)) {
            return repo.findByResetToken(code).get().getSentTo().equals(email);
        }
        return false;
    }
}
