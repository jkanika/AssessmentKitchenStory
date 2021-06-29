package com.assessment.kitchenstory.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="productlist")
public class ProductList {

		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private long id;
		
		@Column
		private String name;
		
		@Column
		private String cuisine;
		
		@Column
		private double price;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getCuisine() {
			return cuisine;
		}

		public void setCuisine(String cuisine) {
			this.cuisine = cuisine;
		}

		public double getPrice() {
			return price;
		}

		public void setPrice(double price) {
			this.price = price;
		}

		public long getId() {
			return id;
		}

		public ProductList(String name, String cuisine, double price) {
			super();
			this.name = name;
			this.cuisine = cuisine;
			this.price = price;
		}

		public ProductList() {
			super();
		}

		@Override
		public String toString() {
			return "MoviesList [id=" + id + ", name=" + name + ", cuisine=" + cuisine + ", price=" + price + "]";
		}		
			
}
