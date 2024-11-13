package com.sample;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends JpaRepository<StockPrice, Integer>{
	
	@Query("select companyStockPrice from StockPrice where companyName:companyName")
	public Double findStockPriceBycompanyName(String companyName);

}
