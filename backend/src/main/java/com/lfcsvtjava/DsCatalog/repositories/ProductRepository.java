package com.lfcsvtjava.DsCatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lfcsvtjava.DsCatalog.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
