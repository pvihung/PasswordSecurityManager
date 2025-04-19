package me.authenticate.Authenticator.CS157A.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class VaultEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int entryID;
    private int userID;
    private String appName;
    private String username;
    private String password;
    private LocalDateTime lastModified;
}
