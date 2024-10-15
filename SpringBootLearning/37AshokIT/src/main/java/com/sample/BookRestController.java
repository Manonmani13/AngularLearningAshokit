package com.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookRestController {
	
	@GetMapping("/book")
	
	public Book getBookData()
	{
		Book b=new Book(11,"C++",160.00);
		return b;
		
	}

}
