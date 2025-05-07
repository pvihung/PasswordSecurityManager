package me.authenticate.Authenticator.CS157A.Entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loginId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userid")
    private User user;
    private LocalDateTime previousLogin = LocalDateTime.now();
    private String IPAdd;
}
