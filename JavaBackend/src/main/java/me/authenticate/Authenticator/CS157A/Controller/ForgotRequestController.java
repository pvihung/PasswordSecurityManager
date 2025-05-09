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

    @PostMapping("/verify-email")
    public ResponseEntity<String> verifyEmail(@RequestBody String email) {
        if (service.verifyEmail(email)) {
            String code = recordRequest(email);
            return ResponseEntity.ok().body(code);
        }
        System.out.println(email);
        return ResponseEntity.badRequest().build();
    }

    public String recordRequest(@RequestBody String email) {
        return service.recordRequest(email);
    }

    @GetMapping("/verify-code/{code}/{email}")
    public boolean verifyCode(@PathVariable String code, @PathVariable String email) {
        return service.verifyCode(code, email);
    }
}
