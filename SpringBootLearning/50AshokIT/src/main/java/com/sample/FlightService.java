package com.sample;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FlightService {

	public String  invokeUnitedFightApi()
	{
		String endpointUrl="http://mu.mulesoft-training.com/essentials/united/flights/";
		RestTemplate rt=new RestTemplate();
		ResponseEntity<String> res=rt.getForEntity(endpointUrl, String.class);
		String body=res.getBody();
		return body;
	}
}
