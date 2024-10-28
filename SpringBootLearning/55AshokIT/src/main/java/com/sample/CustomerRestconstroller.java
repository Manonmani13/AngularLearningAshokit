package com.sample;

import java.awt.PageAttributes.MediaType;
import java.sql.Date;
import java.time.Duration;
import java.util.function.Supplier;
import java.util.stream.Stream;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

@RestController
public class CustomerRestconstroller {
	
	@GetMapping(value="/getEvent", produces="application/json")
	public ResponseEntity<Mono<CustomerEvent>> getCustomerEvent()
	{
		CustomerEvent customEvent=new CustomerEvent("John",new Date(0));
		Mono<CustomerEvent> customerMono=Mono.just(customEvent);
		ResponseEntity<Mono<CustomerEvent>> responseEntity=new ResponseEntity<Mono<CustomerEvent>>(customerMono,HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping(value="/getEvents", produces=MediaType.TEXT_EVENT_STREAM_VALUE)
	public ResponseEntity<Flux<CustomerEvent>> getCustomerEvents()
	{
		CustomerEvent customEvent=new CustomerEvent("John",new Date(0));
		Stream<CustomerEvent> customStream=Stream.generate(()->customEvent);
		
		Flux<CustomerEvent> customerMono=Flux.fromStream(customStream);
		Flux<Long> interval =Flux.interval(Duration.ofSeconds(1));
		Flux<Tuple2<Long,CustomerEvent>> zip=Flux.zip(interval, customerMono);
		Flux<CustomerEvent> fluxap=zip.map(Tuple2::getT2);
		ResponseEntity<Flux<CustomerEvent>> responseEntity=new ResponseEntity<Flux<CustomerEvent>>(customerMono,HttpStatus.OK);
		return responseEntity;
	}

}
