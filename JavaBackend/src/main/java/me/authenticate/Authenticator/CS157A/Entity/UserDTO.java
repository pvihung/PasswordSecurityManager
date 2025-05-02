package me.authenticate.Authenticator.CS157A.Entity;

import lombok.Data;

@Data
public class UserDTO {
    private int userID;
    private String username;
    private String masterPass;
    private String email;
    //private String phoneNumber;
}
