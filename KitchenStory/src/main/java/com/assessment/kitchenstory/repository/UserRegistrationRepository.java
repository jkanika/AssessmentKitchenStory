package com.assessment.kitchenstory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assessment.kitchenstory.entity.UserRegistration;

public interface UserRegistrationRepository extends JpaRepository<UserRegistration, Long>{

}
