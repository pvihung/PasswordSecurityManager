package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Service.ForgotRequestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")
public class ForgotRequestController {
    private final ForgotRequestService service;

    @PostMapping("verify-email")
    public ResponseEntity<String> verifyEmail(@RequestBody String email) {
        if (service.verifyEmail(email)) {
            recordRequest(email);
            return ResponseEntity.ok().body("Forgot request recorded successfully");
        }
        System.out.println(email);
        return ResponseEntity.badRequest().build();
    }

    public void recordRequest(@RequestBody String email) {
        service.recordRequest(email);
    }
}
