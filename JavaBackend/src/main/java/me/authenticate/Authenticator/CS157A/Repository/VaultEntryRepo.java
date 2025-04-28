package me.authenticate.Authenticator.CS157A.Repository;

import me.authenticate.Authenticator.CS157A.Entity.VaultEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VaultEntryRepo extends JpaRepository<VaultEntry, Integer> {
    List<VaultEntry> findByUserUserID(int userid);
}
