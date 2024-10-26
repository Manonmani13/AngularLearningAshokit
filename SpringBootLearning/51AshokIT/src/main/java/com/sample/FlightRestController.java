package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FlightRestController {
	
	@Autowired
	private FlightService filghtService;
	
	@GetMapping
	public void getFlight()
	{
		 filghtService.invokeUnitedFightApi();
	}

}
