package com.sample;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JavaToJsonConverter {
	public static void main(String[] args) throws JsonProcessingException {
		Book b=new Book();
		b.setBookId(122);
		b.setBookName("Java");
		b.setBookPrice(355.00);
		ObjectMapper obj=new ObjectMapper();
		String json=obj.writeValueAsString(b);
		System.out.println(json);
	}

}
