package com.assessment.kitchenstory.entity;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="movieorderlist")
public class MovieOrderList {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private long movieid;
	
	@Column
	private long userid;
	
	@Column
	private String amount;
	
	@Column
	private Date date;

	public long getMovieid() {
		return movieid;
	}

	public void setMovieid(long movieid) {
		this.movieid = movieid;
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public long getId() {
		return id;
	}

	public MovieOrderList(long movieid, long userid, String amount, Date date) {
		super();
		this.movieid = movieid;
		this.userid = userid;
		this.amount = amount;
		this.date = date;
	}

	public MovieOrderList() {
		super();
	}
}
