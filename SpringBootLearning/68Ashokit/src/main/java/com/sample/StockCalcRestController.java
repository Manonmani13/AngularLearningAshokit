package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.discovery.converters.Auto;

@RestController
public class StockCalcRestController {
	
	@Autowired
	private StockCalcService stockCalcService;
	
	
	@GetMapping("/calc/{companyName}/{quantity}")
	public StockCalApiResponse getStockCost(@PathVariable("companyName") String companyName,@PathVariable("quantity") Integer quantity)
	{
		return stockCalcService.getStockCost(companyName, quantity);
	}

}
