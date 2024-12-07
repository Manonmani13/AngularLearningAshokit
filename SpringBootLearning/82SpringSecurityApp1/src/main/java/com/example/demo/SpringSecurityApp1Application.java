package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SpringSecurityApp1Application {

	public static void main(String[] args) {
	 SpringApplication.run(SpringSecurityApp1Application.class, args);
	 BCryptPasswordEncoder bpe=new BCryptPasswordEncoder();
	 String encode=bpe.encode("dev@123");
	 System.out.println(encode);
	}

}
