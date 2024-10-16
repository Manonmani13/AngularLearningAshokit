package com.sample;

public class JavaToXmlConveter {
	public static void main(String[] args) {
		Book b=new Book();
		b.setBookId(122);
		b.setBookName("Java");
		b.setBookPrice(355.00);
		JAXBContext context =JAXBContext.newInstance(Book.class);
		Marshaller marsheller=context.createMarshaller();
		marsheller.marshal(b,System.out);
		
	}

}
