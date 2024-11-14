package com.sample;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends JpaRepository<StockPrice, Integer> {

    @Query("SELECT s.companyStockPrice FROM StockPrice s WHERE s.companyName = :companyName")
    public Double findStockPriceBycompanyName(String companyName);
}
