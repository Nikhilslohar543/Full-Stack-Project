package com.Entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Expences {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String expName;
	long amount;
	LocalDate date;
	String description;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	@JsonBackReference
	ClientAuth uId;
	
	public Expences() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Expences(int id, String expName, long amount, LocalDate date, String description, ClientAuth uId) {
		super();
		this.id = id;
		this.expName = expName;
		this.amount = amount;
		this.date = date;
		this.description = description;
		this.uId = uId;
	}

	public Expences(String expName, long amount, LocalDate date, String description, ClientAuth uId) {
		super();
		this.expName = expName;
		this.amount = amount;
		this.date = date;
		this.description = description;
		this.uId = uId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getExpName() {
		return expName;
	}

	public void setExpName(String expName) {
		this.expName = expName;
	}

	public long getAmount() {
		return amount;
	}

	public void setAmount(long amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ClientAuth getuId() {
		return uId;
	}

	public void setuId(ClientAuth uId) {
		this.uId = uId;
	}

	@Override
	public String toString() {
		return "Expences [id=" + id + ", expName=" + expName + ", amount=" + amount + ", date=" + date
				+ ", description=" + description + ", uId=" + uId + "]";
	}

	
}
