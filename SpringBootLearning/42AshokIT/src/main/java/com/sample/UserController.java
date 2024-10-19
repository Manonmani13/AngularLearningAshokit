package com.sample;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class UserController {
	
	
	@GetMapping("/users")
	public String getMethodName(@RequestBody User user) {
		System.out.println(user);
		String msg="User Result saved Successfully";
		return msg;
	}
	

}
