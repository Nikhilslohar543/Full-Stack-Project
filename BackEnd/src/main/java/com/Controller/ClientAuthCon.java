package com.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.ClientAuth;
import com.Service.ClientAuthSer;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/users")
public class ClientAuthCon {

	@Autowired
	ClientAuthSer clientService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody ClientAuth user,HttpSession session) {
		
		return clientService.login(user, session);
	}	
	
	@PostMapping("/signup") 
	public ResponseEntity<?> signup(@RequestBody ClientAuth user) {
		
		return clientService.signup(user);
	}
	
	@GetMapping("/logout")
	public String logout() {
		
		return "Logged out successfull";
	}
	
	
}
