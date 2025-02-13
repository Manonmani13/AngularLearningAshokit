package com.sample;

import java.util.Map;

import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;

public class UserRepositoryImpl implements UserREpository {
	
	
	private HashOperations<String,String,User> hashOperations;
	
	public UserRepositoryImpl(RedisTemplate<String, User> redisTemplate) {
		hashOperations=redisTemplate.opsForHash();
	}
	public void save(User user) {
		hashOperations.put("USER", user.getId(), user);
	}
	@Override
	public Map<String, User> findAll() {

		return hashOperations.entries("USER");
	}
	@Override
	public User findById(String id) {
		return hashOperations.get("USER", id);
	}
	@Override
	public void update(User user) {
		save(user);
	}
	@Override
	public void delete(String id) {
		hashOperations.delete("USER", id);
	}
	
	

}
