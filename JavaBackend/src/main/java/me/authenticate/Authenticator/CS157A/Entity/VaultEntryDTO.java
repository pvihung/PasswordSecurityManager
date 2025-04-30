package me.authenticate.Authenticator.CS157A.Entity;

import lombok.Data;

@Data
public class VaultEntryDTO {
    private int userid;
    private String appName;
    private String username;
    private String password;
}
