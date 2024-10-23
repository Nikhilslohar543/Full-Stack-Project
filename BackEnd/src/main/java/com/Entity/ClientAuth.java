package com.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class ClientAuth {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int uId;
	String first_name;
	String last_name;
	
	@Column(unique = true)
	String username;
	String password;
	
	@OneToMany(mappedBy = "uId", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
	List<Expences> expences;
	
	public ClientAuth() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ClientAuth(int uId, String first_name, String last_name, String username, String password,
			List<Expences> expences) {
		super();
		this.uId = uId;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.password = password;
		this.expences = expences;
	}

	public ClientAuth(String first_name, String last_name, String username, String password, List<Expences> expences) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.password = password;
		this.expences = expences;
	}


	public ClientAuth(int uId, List<Expences> expences) {
		super();
		this.uId = uId;
		this.expences = expences;
	}

	public int getuId() {
		return uId;
	}

	public void setuId(int uId) {
		this.uId = uId;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Expences> getExpences() {
		return expences;
	}

	public void setExpences(List<Expences> expences) {
		this.expences = expences;
	}

	@Override
	public String toString() {
		return "ClientAuth [uId=" + uId + ", first_name=" + first_name + ", last_name=" + last_name + ", username="
				+ username + ", password=" + password + ", expences=" + expences + "]";
	}

	
}
