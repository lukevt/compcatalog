package com.lfcsvtjava.DsCatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lfcsvtjava.DsCatalog.entities.User;

public interface UserRepository  extends JpaRepository<User, Long>{

		User findByEmail(String email);
}
