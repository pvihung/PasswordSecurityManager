package me.authenticate.Authenticator.CS157A.Entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class VaultEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int entryID;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userid")
    private User user;
    private String appName;
    private String username;
    private String password;
    private LocalDateTime lastModified = LocalDateTime.now();

    public void encrypt() {
        StringBuilder encryptedPassword = new StringBuilder(password);
        int charVal;
        for(int i = 0; i < password.length(); i++) {
            charVal = (int) password.charAt(i);
            if(i % 2 == 0) { // every even index we increment by 5
                if(charVal + 5 > 127)
                    encryptedPassword.setCharAt(i, (char) ((charVal + 5) - 127));
                else
                    encryptedPassword.setCharAt(i, (char) (charVal + 5));
            } else { // every odd index we increment by 2
                if(charVal + 2 > 127)
                    encryptedPassword.setCharAt(i, (char) ((charVal + 2) - 127));
                else
                    encryptedPassword.setCharAt(i, (char) (charVal + 2));
            }
        }
        password = encryptedPassword.toString();
    }

    public String decrypt() {
        StringBuilder decryptedPassword = new StringBuilder(password);
        int charVal;
        for(int i = 0; i < password.length(); i++) {
            charVal = (int) password.charAt(i);
            if(i % 2 == 0) {
                if(charVal - 5 < 0)
                    decryptedPassword.setCharAt(i, (char)(127 + (charVal - 5)));
                else
                    decryptedPassword.setCharAt(i, (char)(charVal - 5));
            } else {
                if(charVal - 2 < 0)
                    decryptedPassword.setCharAt(i, (char)(127 + (charVal - 5)));
                else
                    decryptedPassword.setCharAt(i, (char)(charVal - 2));
            }
        }
        return decryptedPassword.toString();
    }
}
