package com.assessment.kitchenstory.entity;

public class User {

	
	private String role;
	private String email;
	private String pass;

	public User() {	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	@Override
	public String toString() {
		return "User [role=" + role + ", email=" + email + ", pass=" + pass + "]";
	}

	public User(String role, String email, String pass) {
		super();
		this.role = role;
		this.email = email;
		this.pass = pass;
	}
	
}
