package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.User;
import me.authenticate.Authenticator.CS157A.Entity.VaultEntry;
import me.authenticate.Authenticator.CS157A.Entity.VaultEntryDTO;
import me.authenticate.Authenticator.CS157A.Repository.UserRepo;
import me.authenticate.Authenticator.CS157A.Repository.VaultEntryRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VaultEntryService {
    private final VaultEntryRepo repo;
    private final UserRepo userList;

    public VaultEntry addEntry(VaultEntryDTO v) {
        User u = new User();
        if (userList.findById(v.getUserid()).isPresent()) {
            u = userList.findById(v.getUserid()).get();
        }
        VaultEntry ve = new VaultEntry();
        ve.setAppName(v.getAppName());
        ve.setUsername(v.getUsername());
        ve.setPassword(v.getPassword());
        ve.encrypt();
        ve.setUser(u);
        return repo.save(ve);
    }

    public ResponseEntity<Void> deleteEntry(VaultEntryDTO v) {
        VaultEntry deleted =
                repo.findByUserUserIDAndUsername(v.getUserid(), v.getUsername()).get();
        repo.delete(deleted);
        return ResponseEntity.noContent().build();
    }

    public VaultEntry retrieveEntry(int ID) {
        return repo.findById(ID).orElse(null);
    }

    public List<VaultEntryDTO> retrieveVault(int ID) {
        List<VaultEntryDTO> dtoList = new ArrayList<>();
        List<VaultEntry> entries = repo.findByUserUserID(ID);
        for (VaultEntry entry : entries) {
            VaultEntryDTO dto = new VaultEntryDTO();
            dto.setUserid(entry.getUser().getUserID());
            dto.setAppName(entry.getAppName());
            dto.setUsername(entry.getUsername());
            dto.setPassword(entry.getPassword());
            dto.setLastModified(entry.getLastModified());
            dtoList.add(dto);
        }
        return dtoList;
    }
}
