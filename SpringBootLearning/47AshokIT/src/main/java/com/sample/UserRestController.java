package com.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestController {
	
	@GetMapping(value="/user/{userId}")
	public String getNAme(@PathVariable("userId") Integer userID)
	{
		if(userID==100)
		{
			return "Raju";
		}
		else if(userID==101)
		{
			return "Rani";
		}
		else
		{
			return "User Not Found";
		}
	}

}
