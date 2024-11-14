package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StockPriceController {
	
	@Autowired
	private StockPriceService service;
	
	@GetMapping("/price/{companyName}")
	public ResponseEntity<StockPriceResponse> getStockPRice(@PathVariable("companyName")String companyName)
	{
		StockPriceResponse response=service.getStckPrice(companyName);
		
		return new ResponseEntity<StockPriceResponse>(response,HttpStatus.OK);
	}

}
