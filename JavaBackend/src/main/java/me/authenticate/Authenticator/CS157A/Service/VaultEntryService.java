package me.authenticate.Authenticator.CS157A.Service;

import lombok.RequiredArgsConstructor;
import me.authenticate.Authenticator.CS157A.Entity.User;
import me.authenticate.Authenticator.CS157A.Entity.VaultEntry;
import me.authenticate.Authenticator.CS157A.Entity.VaultEntryDTO;
import me.authenticate.Authenticator.CS157A.Repository.UserRepo;
import me.authenticate.Authenticator.CS157A.Repository.VaultEntryRepo;
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
        ve.setUser(u);
        return repo.save(ve);
    }

//    public VaultEntry deleteEntry(VaultEntryDTO v) {
//        VaultEntry deleted = repo.findByUserUserID(v.getUserid()).;
//        repo.delete(deleted);
//        return deleted;
//    }

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
            dtoList.add(dto);
        }
        return dtoList;
    }
}
