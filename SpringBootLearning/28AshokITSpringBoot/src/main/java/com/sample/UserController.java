package com.sample;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.validation.Valid;


@Controller
public class UserController {
	
	@GetMapping("/user-form")
	public String loadUserForm(Model model)
	{
		User userObj=new User();
		model.addAttribute("user",userObj);
		return "index";
	}
	
	@PostMapping("/saveUser")
	public String loadUserForm(@Valid User user,BindingResult result, Model model)
	{
		if(result.hasErrors())
		{
			return "index";
		}
		System.out.println(user);
		model.addAttribute("msg",user);
		return "dasdboard";
	}
	
}
