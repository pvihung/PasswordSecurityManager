package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import me.authenticate.Authenticator.CS157A.Service.EmailService;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/sendMail/{to}/{text}")
    public String sendMail(@PathVariable String to, @PathVariable String text) {
        String subject = "CS157A Authenticator Forgot Request";
        return emailService.sendSimpleMail(to, subject, text);
    }
}
