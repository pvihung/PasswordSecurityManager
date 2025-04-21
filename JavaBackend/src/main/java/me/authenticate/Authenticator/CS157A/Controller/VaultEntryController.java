package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.VaultEntry;
import me.authenticate.Authenticator.CS157A.Service.VaultEntryService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class VaultEntryController {
    private final VaultEntryService service;

    @PostMapping("/vaultentry")
    public VaultEntry addEntry(@RequestBody VaultEntry v) {
        return service.addEntry(v);
    }

    @GetMapping("vaultentry")
    public VaultEntry retrieveEntry(@RequestBody VaultEntry v) {
        return service.retrieveEntry(v.getEntryID());
    }
}
