package com.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Expences;
import com.Service.ExpencesSer;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api")
public class ExpencesCon {

	@Autowired
	ExpencesSer service;

	@GetMapping("/expences/user/{uId}")
	public List<Expences> getExpences(@PathVariable int uId) {

		return this.service.getExpences(uId);

	}

	@GetMapping("/expences/{id}")
	public Optional<Expences> getExpenceById(@PathVariable int id) {
		return service.getExpenceById(id);
	}

	@PostMapping("/expences/{uId}")
	public ResponseEntity<?> addExpences(@PathVariable int uId, @RequestBody Expences expences) {

	 return service.addExpences(uId,expences);

	}

	@PutMapping("/expences/{uId}")
	public ResponseEntity<?> updateExpences(@PathVariable int uId,@RequestBody Expences expences) {

		return service.updateExpences(uId,expences);

	}

	@DeleteMapping("/expences/{id}")
	public ResponseEntity<?> deleteExpences(@PathVariable int id) {

		return service.deleteExpences(id);
	}

}
