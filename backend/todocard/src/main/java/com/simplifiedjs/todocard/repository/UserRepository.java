package com.simplifiedjs.todocard.repository;

import org.springframework.data.repository.CrudRepository;

import com.simplifiedjs.todocard.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsByEmail(String email);

}
