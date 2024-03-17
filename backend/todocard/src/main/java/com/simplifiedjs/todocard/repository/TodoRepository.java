package com.simplifiedjs.todocard.repository;

import org.springframework.data.repository.CrudRepository;

import com.simplifiedjs.todocard.entity.Todo;

// This will be AUTO IMPLEMENTED by Spring into a Bean called todoRepository
public interface TodoRepository extends CrudRepository<Todo, Long> {

}
