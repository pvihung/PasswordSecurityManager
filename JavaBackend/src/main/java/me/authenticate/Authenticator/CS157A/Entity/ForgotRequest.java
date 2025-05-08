package me.authenticate.Authenticator.CS157A.Entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.Random;

@Entity
@Data
public class ForgotRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int requestID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userid")
    private User user;
    private String resetToken = GenerateToken();
    private LocalDateTime requestedAt = LocalDateTime.now();
    private String sentTo;

    // Call this to generate new verification code
    private String GenerateToken() {
        Random generator = new Random();
        int token = generator.nextInt(999999);
        return String.format("%06d", token);
    }
}
