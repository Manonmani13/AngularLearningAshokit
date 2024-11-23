package com.sample;

import java.util.Map;

public interface UserREpository {

	void save(User user);
	
	Map<String,User> findAll();
	
	User findById(String id);
	
	void update(User user);
	 
	void delete(String id);
}
