package com.sample;

import java.sql.Date;

public class CustomerEvent {
	
	private String name;
	
	private Date date;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public CustomerEvent(String name, Date date) {
		super();
		this.name = name;
		this.date = date;
	}
	
	
	

}
