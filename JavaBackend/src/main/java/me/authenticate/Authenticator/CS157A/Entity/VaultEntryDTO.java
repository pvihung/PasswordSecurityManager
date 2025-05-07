package me.authenticate.Authenticator.CS157A.Entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class VaultEntryDTO {
    private int userid;
    private String appName;
    private String username;
    private String password;
    private LocalDateTime lastModified;
}
