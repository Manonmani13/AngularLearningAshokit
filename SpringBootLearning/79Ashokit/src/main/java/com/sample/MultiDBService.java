package com.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MultiDBService {
	@Autowired
	private io.github.resilience4j.circuitbreaker.CircuitBreaker circuitBreaker;
	
	@Autowired
	private com.syf.csl.db2.repo.EmpRepo2 repo2;
	
	@CircuitBreaker(name="abc" fallbackMethod="fallBackMethodForDB2Data")
	public Iterable<?> getEmpData(String flag){
	System.out.println("Under MAin method :: "+circuitBreaker.getState().name());
	System.out.println("**** called regular methods.... ****");
	if("fail".equals(flag)) {
		throw new RuntimeException();
	}
	Iterable<com.syf.csl.db1.entity.Employee> db1Employe=repo2.findAll();
	return db1Employe;
	}

}
