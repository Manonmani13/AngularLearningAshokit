package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class TicketBookRestController {
	
	@Autowired
	private TicketService ticketService;
	
	@PostMapping
	public TicketResponse bookTicket(@RequestBody PassengerRequest request)
	{
		return ticketService.initiateTicketBookProcess(request);
	}

}
