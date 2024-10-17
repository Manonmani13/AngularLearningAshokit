package com.sample;

@XmlRootElement

public class Customer {

	private Integer customerId;
	
	private String customerNAme;
	
	private Long customerPhno;

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getCustomerNAme() {
		return customerNAme;
	}

	public void setCustomerNAme(String customerNAme) {
		this.customerNAme = customerNAme;
	}

	public Long getCustomerPhno() {
		return customerPhno;
	}

	public void setCustomerPhno(Long customerPhno) {
		this.customerPhno = customerPhno;
	}

	public Customer(Integer customerId, String customerNAme, Long customerPhno) {
		super();
		this.customerId = customerId;
		this.customerNAme = customerNAme;
		this.customerPhno = customerPhno;
	}

	public Customer() {
		super();
	}
	
	
}
