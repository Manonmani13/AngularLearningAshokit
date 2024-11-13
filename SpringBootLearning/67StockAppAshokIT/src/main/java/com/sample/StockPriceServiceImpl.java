package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;


public class StockPriceServiceImpl implements StockPriceService{
	
	@Autowired	
	private StockRepository repository;
	
	@Autowired
	private Environment env;

	@Override
	public StockPriceResponse getStckPrice(String companyName) {
		// TODO Auto-generated method stub
		Double stockPrice =repository.findStockPriceBycompanyName(companyName);
		StockPriceResponse response=new StockPriceResponse();
		response.setCompanyStockPrice(stockPrice);
		response.setCompanyName(companyName);
		String port=env.getProperty("sever.port");
		response.setPortNumber(Integer.parseInt(port));
		return response;
	}

}
