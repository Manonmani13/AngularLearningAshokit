package com.sample;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
@Service
@FeignClient(name="STOCK-PRICE-API")
public interface StockPriceClient {
	
	@GetMapping("/price/{companyName}")
	public StockPriceApiResponse invokeStockPriceApi(@PathVariable String companyName);

}
