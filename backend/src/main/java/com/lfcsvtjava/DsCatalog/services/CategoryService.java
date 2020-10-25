package com.lfcsvtjava.DsCatalog.services;



import java.util.Optional;


import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lfcsvtjava.DsCatalog.dto.CategoryDTO;
import com.lfcsvtjava.DsCatalog.entities.Category;
import com.lfcsvtjava.DsCatalog.repositories.CategoryRepository;
import com.lfcsvtjava.DsCatalog.services.exception.DatabaseException;
import com.lfcsvtjava.DsCatalog.services.exception.ResourceNotFoundException;


@Service
public class CategoryService {
	
		@Autowired
		private CategoryRepository repository;
		
		@Transactional(readOnly=true)
		public Page <CategoryDTO>findAllPaged(PageRequest pageRequest){
			Page<Category>  list = repository.findAll(pageRequest);
			
			return list.map(x -> new CategoryDTO(x));
						
		}
		
		
		@Transactional(readOnly=true)
		public CategoryDTO findById(Long id) {
			Optional<Category> obj = repository.findById(id);
			Category entity = obj.orElseThrow(()-> new ResourceNotFoundException("Entity Not Found"));
			return new CategoryDTO(entity);
		}

		@Transactional
		public CategoryDTO insert(CategoryDTO dto) {
			Category entity = new Category();
			entity.setName(dto.getName());
			entity = repository.save(entity);
			return new CategoryDTO(entity);
			
		}

		@Transactional
		public CategoryDTO update(Long id, CategoryDTO dto) {
			try {
				Category entity = repository.getOne(id);
				entity.setName(dto.getName());
				entity = repository.save(entity);
				return new CategoryDTO(entity);
			}
			catch(EntityNotFoundException e){
				throw new ResourceNotFoundException("Id not found " + id);
				
			}
			
			
			
		}

		// no Transactional or can't capture exception from database
		public void delete(Long id) {
			try {
				repository.deleteById(id);
			}
			catch(EmptyResultDataAccessException e){
				throw new ResourceNotFoundException("Id not found " + id);
			}
			catch(DataIntegrityViolationException e) {
				throw new DatabaseException("Integrity Violation");
			}
		}
}
