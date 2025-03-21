package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuoteRestController {
	
	@Autowired
	private QuoteClient quoteClient;
@GetMapping
	public String getQuote()
	{
		return quoteClient.invokeRandomQuoteApi();
	}
@GetMapping("/res")
public QuoteApiResponse getQuoteRes()
{
	return quoteClient.invokeRandomQuoteApi1();
}

}
