package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.ForgotRequest;
import me.authenticate.Authenticator.CS157A.Service.ForgotRequestService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ForgotRequestController {
    private final ForgotRequestService service;

    @PostMapping("/forgot")
    public ForgotRequest recordRequest(@RequestBody ForgotRequest f) {
        return service.recordRequest(f);
    }
}
