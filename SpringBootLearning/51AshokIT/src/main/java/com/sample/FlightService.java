package com.sample;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FlightService {

	public void  invokeUnitedFightApi()
	{
		String endpointUrl="http://mu.mulesoft-training.com/essentials/united/flights/";
		RestTemplate rt=new RestTemplate();
		ResponseEntity<Flights> res=rt.getForEntity(endpointUrl, Flights.class);
		Flights body=res.getBody();
		List<Flight> flights=body.getFlights();
		flights.forEach(flight->System.out.println(flight));
	}
}
