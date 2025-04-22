package me.authenticate.Authenticator.CS157A.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.time.LocalDateTime;
import org.json.JSONObject;

@Entity
@Data
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loginId;
    private int userId;
    private LocalDateTime previousLogin;
    private String IPAdd;
    //private JSONObject deviceInfo;

}
