package com.sample;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class StockPrice {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer stockPriceId;
	
	private String companyName;
	
	private Double companyStockPrice;

	public Integer getStockPriceId() {
		return stockPriceId;
	}

	public void setStockPriceId(Integer stockPriceId) {
		this.stockPriceId = stockPriceId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Double getCompanyStockPrice() {
		return companyStockPrice;
	}

	public void setCompanyStockPrice(Double companyStockPrice) {
		this.companyStockPrice = companyStockPrice;
	}

}
