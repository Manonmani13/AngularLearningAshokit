package com.sample;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class BookRestController {
	
	@GetMapping(value="/book/{isbn}",produces="application/json")
	public Book getBookInfo(@PathVariable("isbn") String isbn) {
		Book b=new Book(isbn,"Spring",300.00,"Rod Johnson");
		Link withREl=WebMvcLinkBuilder.linkTo(
				WebMvcLinkBuilder.methodOn(BookRestController.class).getAllBooks()).withRel("All-Books");
		b.add(withREl);
		return b;
	}
	
	@GetMapping
	public List<Book> getAllBooks()
	{
		Book b1=new Book("ISBN001","Spring",300.00,"Rod Johnson");
		Book b2=new Book("ISBN002","Spring Boot",400.00,"Rod Johnson");
		List<Book> books=new ArrayList<Book>();
		books.add(b1);
		books.add(b2);
		return books;

	}

}
