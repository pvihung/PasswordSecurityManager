package me.authenticate.Authenticator.CS157A.Entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class LoginDTO {
    private int loginId;
    private int userid;
    private LocalDateTime previousLogin;
    private String IPAdd;
}
