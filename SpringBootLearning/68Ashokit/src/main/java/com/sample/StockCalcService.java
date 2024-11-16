package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockCalcService {
	
	@Autowired

	private StockPriceClient priceClient;
	
	
	public StockCalApiResponse getStockCost(String companyName,Integer quantity)
	{
		StockCalApiResponse response=new StockCalApiResponse();
		StockPriceApiResponse priceApiResponse=priceClient.invokeStockPriceApi(companyName);
		Double companyStockPrice=priceApiResponse.getCompanyStorePrice();
		Double totalCost=companyStockPrice*quantity;
		response.setCompanyName(companyName);
		response.setPortNumber(priceApiResponse.getPortNumber());
		response.setTotalCost(totalCost);
		response.setQuantity(quantity);
		return response;
	}

}
