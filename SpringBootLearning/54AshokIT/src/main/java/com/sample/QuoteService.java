 package com.sample;

 import reactor.netty.http.client.HttpClient;
import java.time.Duration;

import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientRequestException;

import reactor.core.publisher.Mono;

@Service
public class QuoteService {
    
    private final WebClient webClient;


public QuoteService() {
    HttpClient httpClient = HttpClient.create()
            .responseTimeout(Duration.ofSeconds(60)); // Increase timeout to 60 seconds
    this.webClient = WebClient.builder()
            .clientConnector(new ReactorClientHttpConnector(httpClient))
            .baseUrl("https://quoters.apps.pcfone.io")
            .build();
}

    public Mono<String> invokeQuoteApi() {
        return webClient.get()
                .uri("/api/random")
                .retrieve()
                .bodyToMono(String.class)
                .doOnSuccess(response -> System.out.println("Response: " + response))
                .doOnError(error -> System.err.println("Error: " + error))
                .onErrorResume(WebClientRequestException.class, e -> {
                    return Mono.just("Error fetching quote: " + e.getMessage());
                });
    }
    
    public String invoke()
    {
    	String apiUrl="https://quoters.apps.pcfone.io/api/random";
    	webClient.get().uri(apiUrl)
    	.header("Accept", "applicatio/json")
    	.retrieve().bodyToMono(QuoteApiResponse.class)
    	.subscribe(QuoteService:: handleResponse);
    	System.out.println("*************** Request Sent *********");
    	return "Success";
    	
    }

    public static void handleResponse(QuoteApiResponse resData)
    {
    	System.out.println(resData);
    	System.out.println("Response  pushed to Apache Kafka");
    }
}
