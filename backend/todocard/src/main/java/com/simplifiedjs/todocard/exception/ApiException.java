package com.simplifiedjs.todocard.exception;

public class ApiException extends RuntimeException {

    public ApiException(String message) {
        super(message);
    }
}