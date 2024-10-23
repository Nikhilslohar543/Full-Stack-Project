package com.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Entity.ClientAuth;

public interface ClientAuthDao extends JpaRepository<ClientAuth, Integer>{

	boolean existsByUsername(String username);
	
	ClientAuth findByUsername(String username);
	
}
