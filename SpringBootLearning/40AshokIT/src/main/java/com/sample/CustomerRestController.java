package com.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerRestController {
	
	@GetMapping(value="/customer", produces= {"application/json","application/xml"})
	public Customer getCustomer()
	{
		Customer c=new Customer(11,"Manonmani",3943849384l);
		return c;
	}

}
