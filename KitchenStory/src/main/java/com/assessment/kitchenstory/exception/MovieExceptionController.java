package com.assessment.kitchenstory.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class MovieExceptionController {

	@ExceptionHandler(value=MovieNotFoundException.class)
	public ResponseEntity<Object> exception(MovieNotFoundException exception){
		return new ResponseEntity<Object>("Movie Not Found !",HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value=InvalidMovieException.class)
	public ResponseEntity<Object> exception2(InvalidMovieException exception){
		return new ResponseEntity<Object>("Invalid Movie, Compulsory Parameters are missing !",HttpStatus.BAD_REQUEST);
	}
}
