package com.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.DAO.ClientAuthDao;
import com.DAO.ExpencesDao;
import com.Entity.ClientAuth;
import com.Entity.Expences;

import jakarta.servlet.http.HttpSession;

@Service
public class ClientAuthSer {

	@Autowired
	ClientAuthDao clientdao;
	
	@Autowired
	ExpencesDao expdao;

	public ResponseEntity<?> login(ClientAuth user, HttpSession session) {

		ClientAuth existinguser = clientdao.findByUsername(user.getUsername());

		if (existinguser != null && existinguser.getUsername().equals(user.getUsername())
				&& existinguser.getPassword().equals(user.getPassword())) {

			session.setAttribute("userId", existinguser.getuId());

			List<Expences> expences = expdao.findByUId(existinguser);

			return ResponseEntity.ok(new ClientAuth(existinguser.getuId(), existinguser.getFirst_name(),
					existinguser.getLast_name(), existinguser.getUsername(), existinguser.getPassword(), expences));
		}

		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	}

	public ResponseEntity<?> signup(ClientAuth user) {

		if (user != null) {

			if (clientdao.existsByUsername(user.getUsername())) {
				System.out.println("username exist :" + user.getUsername());
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Username already exist!");
			}

			clientdao.save(user);
			return ResponseEntity.ok("Successfully registered with " + user.getUsername() + " username.");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid credentials!");

	}

}
