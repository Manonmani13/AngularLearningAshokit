package com.sample;

import java.net.http.HttpHeaders;

import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TicketService {
	
	public TicketResponse initiateTicketBookProcess(PassengerRequest request)
	{
		String endpointUrl="http://localhost:9090//bookTicket";
		RestTemplate rt=new RestTemplate();
		HttpHeaders header=new org.springframework.http.HttpHeaders();
		header.set("content-Type","application/json");
		header.set("Accept","application/json");
//		ResponseEntity<TicketResponse> postEntity= rt.postForEntity(endpointUrl,request, TicketResponse.class);
		ResponseEntity<TicketResponse> postEntity= rt.exchange(endpointUrl,HttpMethod.POST, TicketResponse.class);

		TicketResponse body =postEntity.getBody();
		return body;
	}

}
