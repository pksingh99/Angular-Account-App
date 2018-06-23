package com.qa.roland.Account.controllers;

import com.qa.roland.Account.models.Account;
import com.qa.roland.Account.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/accounts")
public class AccountsController {

    @Autowired
    private AccountRepository repo;

    @GetMapping
    public List<Account> list() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Account get(@PathVariable("id") Long id) {
        return repo.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Account account) {
        repo.save(account);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable("id") Long id, @RequestBody Account account) {
        Account accountToUpdate = repo.getOne(id);
        if (!accountToUpdate.equals(null)) {
            accountToUpdate.setFirstName(account.getFirstName());
            accountToUpdate.setSurname(account.getSurname());
            accountToUpdate.setAccountNumber(account.getAccountNumber());
            repo.save(accountToUpdate);
        }
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        Account account = repo.getOne(id);
        if (!account.equals(null)) {
            repo.delete(account);
        }
    }

}
