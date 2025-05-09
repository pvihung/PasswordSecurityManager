package me.authenticate.Authenticator.CS157A.Controller;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.VaultEntry;
import me.authenticate.Authenticator.CS157A.Entity.VaultEntryDTO;
import me.authenticate.Authenticator.CS157A.Service.VaultEntryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")
public class VaultEntryController {
    private final VaultEntryService service;

    @PostMapping("/vaultentry")
    public VaultEntry addEntry(@RequestBody VaultEntryDTO v) {
        return service.addEntry(v);
    }

    @GetMapping("/vaultentry")
    public VaultEntryDTO retrieveEntry(@PathVariable int ID) {
        return service.retrieveEntry(ID);
    }

    @DeleteMapping("/vaultentry")
    public ResponseEntity<Void> deleteEntry(@RequestBody VaultEntryDTO v) {
        return service.deleteEntry(v);
    }

    @GetMapping("/vault/{ID}")
    public List<VaultEntryDTO> retrieveVault(@PathVariable int ID) {
        return service.retrieveVault(ID);
    }


}
