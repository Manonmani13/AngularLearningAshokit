package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name="GREET-API")
public interface GreetClient {
	
	@GetMapping("/greet")
	public  String invokeGreetApi();
}
