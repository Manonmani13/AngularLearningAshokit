package com.sample;


@org.springframework.stereotype.Service
public interface StockPriceService {
	
	public StockPriceResponse getStckPrice(String companyName);
	

}
