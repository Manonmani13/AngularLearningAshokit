package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class StockPriceServiceImpl implements StockPriceService {
    
    @Autowired    
    private StockRepository repository;
    
    @Autowired
    private Environment env;

    @Override
    public StockPriceResponse getStckPrice(String companyName) {
        // Get the stock price from the repository
        Double stockPrice = repository.findStockPriceBycompanyName(companyName);

        // Create response
        StockPriceResponse response = new StockPriceResponse();
        response.setCompanyStockPrice(stockPrice);
        response.setCompanyName(companyName);
        
        // Set the port number from the environment
        String port = env.getProperty("server.port");
        response.setPortNumber(Integer.parseInt(port));
        
        return response;
    }
}
