package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class QuoteRestController {
    
    @Autowired
    private QuoteService quoteService;
    
    @GetMapping("/random")
    public Mono<String> getRandomQuote() {
        return quoteService.invokeQuoteApi()
                .map(quote -> quote) // Optionally process the quote
                .doOnError(error -> System.err.println("Error fetching quote: " + error));
    }
}
