package com.sample;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeRestController {
	
	@Autowired
	private AppProperties appProperties;
	
	@GetMapping("/welcome")
	public String welcomeMsg() {
		Map<String,String> msgs=appProperties.getMessages();
		String string=msgs.get("welcomeMsg");
		return string;
	}
	@GetMapping("/greet")
	public String greetMsg() {
		
		Map<String,String> msgs=appProperties.getMessages();
		String string=msgs.get("greetMsg");
		return string;
	}

}
