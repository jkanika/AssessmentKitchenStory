package com.assessment.kitchenstory.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assessment.kitchenstory.entity.ProductList;
import com.assessment.kitchenstory.exception.MovieNotFoundException;
import com.assessment.kitchenstory.repository.MoviesListRepository;


@RestController
public class ProductController {

	
	// inject dependency
		@Autowired
		private MoviesListRepository moviesListRepo;
		

		@Autowired
		private HttpSession session;

		
		// GET all product
		@GetMapping("/products")
		public List<ProductList> getAllProducts() {
			return this.moviesListRepo.findAll();
		}

		// GET One Product by id
		@GetMapping("/products/{id}")
		public Optional<ProductList> getProductById(@PathVariable("id") long productId, HttpSession session) {
			System.out.println(productId);
			if(!this.moviesListRepo.findById(productId).isEmpty()) {
				session.setAttribute("movie",productId);
				System.out.println("movie session : "+session.getAttribute("movie"));
				return this.moviesListRepo.findById(productId);
			}
			throw new MovieNotFoundException("Product Not Found with id " + productId);
		}

		
		
		// Add a product
		@PostMapping("/products")
		public ProductList addProduct(@RequestBody ProductList product) {
			System.out.println(product);
			return this.moviesListRepo.save(product);
		}

		@PutMapping("/products/{id}")
		public ProductList updateProduct(@PathVariable("id") long productId, @RequestBody ProductList product) {

			// 1. find product
			ProductList fechedProduct = this.moviesListRepo.findById(productId).orElseThrow(() -> {
				throw new MovieNotFoundException("Movie Not Found with id " + product.getId());
			});
			
			System.out.println(product);

			if(!product.getName().isEmpty()) {
				fechedProduct.setName(product.getName());
			}
			if(!product.getCuisine().equals("")) {
				fechedProduct.setCuisine(product.getCuisine());
			}
			if(product.getPrice() != 0) {
				fechedProduct.setPrice(product.getPrice());
			}
//			// 2. set new values
//			fechedProduct.setMovName(product.getMovName());
//			fechedProduct.setMovDesc(product.getMovDesc());
//			fechedProduct.setMovRel(product.getMovRel());
//			fechedProduct.setMovPrice(product.getMovPrice());

			// 3. save product
			return this.moviesListRepo.save(fechedProduct);
		}

		@DeleteMapping("/products/{id}")
		public void deleteProduct(@PathVariable(value = "id") long productId) {
			// 1. find product
			ProductList fechedProduct = this.moviesListRepo.findById(productId).orElseThrow(() -> {
				throw new MovieNotFoundException("Product Not Found with id " + productId);
			});
			this.moviesListRepo.delete(fechedProduct);
		}
}
