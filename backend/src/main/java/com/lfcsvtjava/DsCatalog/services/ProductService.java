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

import com.lfcsvtjava.DsCatalog.dto.ProductDTO;
import com.lfcsvtjava.DsCatalog.entities.Product;
import com.lfcsvtjava.DsCatalog.repositories.ProductRepository;
import com.lfcsvtjava.DsCatalog.services.exception.DatabaseException;
import com.lfcsvtjava.DsCatalog.services.exception.ResourceNotFoundException;


@Service
public class ProductService {
	
		@Autowired
		private ProductRepository repository;
		
		@Transactional(readOnly=true)
		public Page <ProductDTO>findAllPaged(PageRequest pageRequest){
			Page<Product>  list = repository.findAll(pageRequest);
			
			return list.map(x -> new ProductDTO(x, x.getCategories()));
						
		}
		
		
		@Transactional(readOnly=true)
		public ProductDTO findById(Long id) {
			Optional<Product> obj = repository.findById(id);
			Product entity = obj.orElseThrow(()-> new ResourceNotFoundException("Entity Not Found"));
			return new ProductDTO(entity, entity.getCategories());
		}

		@Transactional
		public ProductDTO insert(ProductDTO dto) {
			Product entity = new Product();
			entity.setName(dto.getName());
			entity.setPrice(dto.getPrice());
			entity.setDate(dto.getDate());
			entity.setImageUrl(dto.getImgUrl());
			entity.setDescription(dto.getDescription());
			entity = repository.save(entity);
			return new ProductDTO(entity);
			
		}

		@Transactional
		public ProductDTO update(Long id, ProductDTO dto) {
			try {
				Product entity = repository.getOne(id);
				entity.setName(dto.getName());
				entity.setPrice(dto.getPrice());
				entity.setDate(dto.getDate());
				entity.setImageUrl(dto.getImgUrl());
				entity.setDescription(dto.getDescription());
				entity = repository.save(entity);
				return new ProductDTO(entity);
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
