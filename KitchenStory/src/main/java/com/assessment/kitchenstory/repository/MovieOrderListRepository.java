package com.assessment.kitchenstory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assessment.kitchenstory.entity.MovieOrderList;

public interface MovieOrderListRepository extends JpaRepository<MovieOrderList, Long> {

}
