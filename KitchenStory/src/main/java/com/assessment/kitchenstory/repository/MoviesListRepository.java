package com.assessment.kitchenstory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assessment.kitchenstory.entity.ProductList;

public interface MoviesListRepository extends JpaRepository<ProductList, Long>{

}
