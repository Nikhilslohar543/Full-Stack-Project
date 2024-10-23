package com.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Entity.ClientAuth;
import com.Entity.Expences;

public interface ExpencesDao extends JpaRepository<Expences, Integer>{

	List<Expences> findByUId(ClientAuth uId);
	
	@Query("SELECT e FROM Expences e WHERE e.uId.id = :uId")
	List<Expences> findByUserId(@Param("uId") int uId);


}
