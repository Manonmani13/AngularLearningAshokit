package com.sample;

import java.net.ResponseCache;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {
	
	@GetMapping("/welcome")
	public ResponseEntity<String> getWelcoeMsg(){
		return new ResponseEntity<String>("Hell",HttpStatus.OK);
	}

}
