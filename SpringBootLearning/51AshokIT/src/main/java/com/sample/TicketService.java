package com.sample;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TicketService {
	
	public TicketResponse initiateTicketBookProcess(PassengerRequest request)
	{
		String endpointUrl="http://localhost:9090//bookTicket";
		RestTemplate rt=new RestTemplate();
		ResponseEntity<TicketResponse> postEntity= rt.postForEntity(endpointUrl,request, TicketResponse.class);
		TicketResponse body =postEntity.getBody();
		return body;
	}

}
