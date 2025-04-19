package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.VaultEntry;
import me.authenticate.Authenticator.CS157A.Repository.VaultEntryRepo;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VaultEntryService {
    private final VaultEntryRepo repo;

    public VaultEntry addEntry(VaultEntry v) {
        return repo.save(v);
    }

    public VaultEntry retrieveEntry(int ID) {
        return repo.findById(ID).orElse(null);
    }
}
