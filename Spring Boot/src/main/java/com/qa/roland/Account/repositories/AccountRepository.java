package com.qa.roland.Account.repositories;

import com.qa.roland.Account.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
