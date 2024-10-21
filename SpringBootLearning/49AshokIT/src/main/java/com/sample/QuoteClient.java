package com.sample;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class QuoteClient {
	
	public String invokeRandomQuoteApi() {
		String apiUrl="https://quoters.apps.pcfone.io/api/random";
		RestTemplate rt=new RestTemplate();
		ResponseEntity<String> responseEntity=rt.getForEntity(apiUrl,String.class);
		int statusCode=responseEntity.getStatusCodeValue();
		String body="";
		if(statusCode==200)
		{
			 body=responseEntity.getBody();
			System.out.println(body);
		}
		return body;
	}
	
	public QuoteApiResponse invokeRandomQuoteApi1() {
		String apiUrl="https://quoters.apps.pcfone.io/api/random";
		RestTemplate rt=new RestTemplate();
		ResponseEntity<QuoteApiResponse> responseEntity=rt.getForEntity(apiUrl,QuoteApiResponse.class);
		int statusCode=responseEntity.getStatusCodeValue();
		if(statusCode==200)
		{
			 QuoteApiResponse api=responseEntity.getBody();
			System.out.println(api);
			return api;
		}
		return null;
	}

}
