package com.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.DAO.ClientAuthDao;
import com.DAO.ExpencesDao;
import com.Entity.ClientAuth;
import com.Entity.Expences;

@Service
public class ExpencesSer {

	@Autowired
	ExpencesDao dao;

	@Autowired
	ClientAuthDao cdao;

	public ResponseEntity<?> addExpences(int uId, Expences expences) {

		Optional<ClientAuth> clientOpt = cdao.findById(uId);
		if (clientOpt.isPresent()) {
			ClientAuth client = clientOpt.get();
			expences.setuId(client);
			dao.save(expences);
			return ResponseEntity.ok("Expence added.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found or expense not added");
		}
	}

	public List<Expences> getExpences(int uId) {
		return dao.findByUserId(uId);

	}

	public ResponseEntity<?> updateExpences(int uId, Expences expences) {

		Optional<ClientAuth> clientOpt = cdao.findById(uId);
		if (clientOpt.isPresent()) {
			ClientAuth client = clientOpt.get();
			
			Optional<Expences> expOpt = dao.findById(expences.getId());

			if(expOpt.isPresent()) {
				Expences expence = expOpt.get();
				
				expence.setId(expences.getId());
				expence.setExpName(expences.getExpName());
				expence.setAmount(expences.getAmount());
				expence.setDate(expences.getDate());
				expence.setDescription(expences.getDescription());
				
				expence.setuId(client);
				
				dao.save(expence);
				
				return ResponseEntity.ok("Expence updated.");
			}else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Expence not found!!!");
			}
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found!!!");
		}
	}

	public Optional<Expences> getExpenceById(int id) {

		return dao.findById(id);
	}

	public ResponseEntity<?> deleteExpences(int id) {

		Expences e = dao.getById(id);
		if (e != null) {
			dao.delete(e);
			return ResponseEntity.ok("Expnece deleted successfully");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!");
		}
	}

}
