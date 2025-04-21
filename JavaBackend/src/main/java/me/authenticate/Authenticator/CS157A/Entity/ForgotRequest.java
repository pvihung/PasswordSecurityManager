package me.authenticate.Authenticator.CS157A.Entity;

import jakarta.persistence.Entity;
import lombok.Data;
import java.time.LocalDateTime;
import jakarta.persistence.Id;

@Entity
@Data
public class ForgotRequest {
    @Id
    private int requestID;
    private int userID;
    private String resetToken;
    private LocalDateTime requestedAt;
    private boolean used = false;
    private String sentTo;
    private Media verificationMethod;

    private enum Media {
        EMAIL, PHONE
    }
}
