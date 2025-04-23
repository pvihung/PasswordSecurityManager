package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.ForgotRequest;
import me.authenticate.Authenticator.CS157A.Service.ForgotRequestService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")
public class ForgotRequestController {
    private final ForgotRequestService service;

    @PostMapping("/forgot")
    public ForgotRequest recordRequest(@RequestBody ForgotRequest f) {
        return service.recordRequest(f);
    }
}
