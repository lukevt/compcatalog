package com.lfcsvtjava.DsCatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lfcsvtjava.DsCatalog.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
