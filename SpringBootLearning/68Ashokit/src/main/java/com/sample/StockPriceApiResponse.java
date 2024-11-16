package com.sample;

public class StockPriceApiResponse {
	private String companyName;
	
	private Double companyStorePrice;
	
	private Integer portNumber;
	private Double totalCost;
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public Double getCompanyStorePrice() {
		return companyStorePrice;
	}
	public void setCompanyStorePrice(Double companyStorePrice) {
		this.companyStorePrice = companyStorePrice;
	}
	public Integer getPortNumber() {
		return portNumber;
	}
	public void setPortNumber(Integer portNumber) {
		this.portNumber = portNumber;
	}
	public Double getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(Double totalCost) {
		this.totalCost = totalCost;
	}
	

}
