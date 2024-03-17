package com.simplifiedjs.todocard.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.simplifiedjs.todocard.exception.ApiException;
import com.simplifiedjs.todocard.exception.InvalidDataException;
import com.simplifiedjs.todocard.exception.ResourceNotFoundException;

import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    @ResponseBody
    public ApiErrorResponse handleResourceNotFound(HttpServletRequest request, ResourceNotFoundException ex) {
        return new ApiErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
    }

    @ExceptionHandler(InvalidDataException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ResponseBody
    public ApiErrorResponse handleInvalidData(HttpServletRequest request, InvalidDataException ex) {
        return new ApiErrorResponse(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }

    @ExceptionHandler(ApiException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ResponseBody
    public ApiErrorResponse handleApiException(HttpServletRequest request, ApiException ex) {
        return new ApiErrorResponse(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ResponseBody
    public ApiErrorResponse handleValidationErrors(HttpServletRequest request, MethodArgumentNotValidException ex) {
        List<String> errors = new ArrayList<>();
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            errors.add(String.format("Field '%s': %s", fieldError.getField(), fieldError.getDefaultMessage()));
        }
        return new ApiErrorResponse(HttpStatus.BAD_REQUEST.value(), "Validation failed", errors);
    }

    @ExceptionHandler(Exception.class) // Catch-all for unexpected exceptions
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public ApiErrorResponse handleOtherExceptions(HttpServletRequest request, Exception ex) {
        // Log the exception for debugging
        ex.printStackTrace();
        return new ApiErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "An internal server error occurred.");
    }
}

class ApiErrorResponse {
    private int status;
    private String message;
    private List<String> validationErrors; // Optional field for validation errors

    public ApiErrorResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public ApiErrorResponse(int status, String message, List<String> validationErrors) {
        this.status = status;
        this.message = message;
        this.validationErrors = validationErrors;
    }
}
