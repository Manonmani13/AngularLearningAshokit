package com.sample;

import java.io.File;
import java.io.IOException;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonToJavaConvertor {
	public static void main(String[] args) throws StreamReadException, DatabindException, IOException {
		ObjectMapper obj=new ObjectMapper();
		File file =new File("book.json");
		Book book=obj.readValue(file, Book.class);
		System.out.println(book);
	}

}
