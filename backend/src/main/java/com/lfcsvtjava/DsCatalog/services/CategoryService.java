package com.lfcsvtjava.DsCatalog.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lfcsvtjava.DsCatalog.entities.Category;
import com.lfcsvtjava.DsCatalog.repositories.CategoryRepository;

@Service
public class CategoryService {
	
		@Autowired
		private CategoryRepository repository;

		public List <Category>findAll(){
			return repository.findAll();
		}
}
