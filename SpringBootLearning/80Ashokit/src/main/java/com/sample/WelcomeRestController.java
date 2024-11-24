package com.sample;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeRestController {
	
	public String welcome() {
		return "Welcome Everyone";
	}

}
