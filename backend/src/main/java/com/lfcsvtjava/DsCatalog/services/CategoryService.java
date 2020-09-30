package com.lfcsvtjava.DsCatalog.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lfcsvtjava.DsCatalog.dto.CategoryDTO;
import com.lfcsvtjava.DsCatalog.entities.Category;
import com.lfcsvtjava.DsCatalog.repositories.CategoryRepository;

@Service
public class CategoryService {
	
		@Autowired
		private CategoryRepository repository;
		
		@Transactional(readOnly=true)
		public List <CategoryDTO>findAll(){
			List<Category>  list = repository.findAll();
			
			return list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
			
			
//			
		}
}
