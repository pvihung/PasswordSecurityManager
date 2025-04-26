package me.authenticate.Authenticator.CS157A.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class ForgotRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int requestID;
    private int userID;
    private String resetToken;
    private LocalDateTime requestedAt;
    private boolean used = false;
    private String sentTo;
//    private Media verificationMethod;

//    private enum Media {
//        EMAIL, PHONE
//    }
}
