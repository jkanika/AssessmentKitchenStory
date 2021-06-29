package com.assessment.kitchenstory.controller;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.assessment.kitchenstory.entity.MovieOrderList;
import com.assessment.kitchenstory.entity.ProductList;
import com.assessment.kitchenstory.entity.User;
import com.assessment.kitchenstory.entity.UserRegistration;
import com.assessment.kitchenstory.exception.MovieNotFoundException;
import com.assessment.kitchenstory.repository.MovieOrderListRepository;
import com.assessment.kitchenstory.repository.MoviesListRepository;
import com.assessment.kitchenstory.repository.UserRegistrationRepository;


@RestController
public class UserController {
	
	//SessionFactory session;
	
	@Autowired
	private UserRegistrationRepository userRegRepo;
	
	@Autowired 
	private MovieOrderListRepository movieOrderListRepo;
	
	
	
	@GetMapping("/user")
	public List<UserRegistration> getAllUsers() {
		return this.userRegRepo.findAll();
	}
	
	@PostMapping("/sign-up")
	public UserRegistration addUser(@RequestBody UserRegistration user) {
		//System.out.println(user);
		List<UserRegistration> users = this.getAllUsers();
		for (UserRegistration userRegistration : users) {
			if(userRegistration.getEmail().equals(user.getEmail())) {
				return null;
			}
		}
		return this.userRegRepo.save(user);
	}
		
	@PostMapping("/sign-in")
	public User showMoviesList(@RequestBody User user, HttpSession session) {
			//System.out.println(user);
			if(user.getEmail().equals("admin@kitchenstory.com") && user.getPass().equals("password")
					&& user.getRole().equals("admin")) {
				session.setAttribute("user", user.getEmail());
				System.out.println("User Session : "+session.getAttribute("user"));
				return(user);
			}
			else {
				List<UserRegistration> users = getAllUsers();
				for (UserRegistration oneUser : users) {
					if(oneUser.getEmail().equals(user.getEmail()) &&
							oneUser.getPass().equals(user.getPass())) {
						session.setAttribute("user", user.getEmail());
						System.out.println("User Session : "+session.getAttribute("user"));
						return (user);
					}
				}
			}
			
			return null;
			//throw new MovieNotFoundException("Admin Not Found with id " + user.getEmail());
	}
}
