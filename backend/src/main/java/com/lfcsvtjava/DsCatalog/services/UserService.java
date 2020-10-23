package com.lfcsvtjava.DsCatalog.services;


import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lfcsvtjava.DsCatalog.dto.RoleDTO;
import com.lfcsvtjava.DsCatalog.dto.UserDTO;
import com.lfcsvtjava.DsCatalog.dto.UserInsertDTO;
import com.lfcsvtjava.DsCatalog.entities.Role;
import com.lfcsvtjava.DsCatalog.entities.User;
import com.lfcsvtjava.DsCatalog.repositories.RoleRepository;
import com.lfcsvtjava.DsCatalog.repositories.UserRepository;
import com.lfcsvtjava.DsCatalog.services.exception.DatabaseException;
import com.lfcsvtjava.DsCatalog.services.exception.ResourceNotFoundException;


@Service
public class UserService {
		
		@Autowired
		private BCryptPasswordEncoder passwordEncoder;
		
		@Autowired
		private UserRepository repository; 
		
		@Autowired
		private RoleRepository roleRepository;
		
		
		@Transactional(readOnly=true)
		public Page <UserDTO>findAllPaged(PageRequest pageRequest){
			Page<User>  list = repository.findAll(pageRequest);
			
			return list.map(x -> new UserDTO(x));
						
		}
		
		
		@Transactional(readOnly=true)
		public UserDTO findById(Long id) {
			Optional<User> obj = repository.findById(id);
			User entity = obj.orElseThrow(()-> new ResourceNotFoundException("Entity Not Found"));
			return new UserDTO(entity);
		}

		@Transactional
		public UserDTO insert(UserInsertDTO dto) {
			User entity = new User();
			copyDtoToEntity(dto, entity);
			entity.setPassword(passwordEncoder.encode(dto.getPassword()));
			entity = repository.save(entity);
			return new UserDTO(entity);
			
		}


		@Transactional
		public UserDTO update(Long id, UserDTO dto) {
			try {
				User entity = repository.getOne(id);
				copyDtoToEntity(dto, entity);
				entity = repository.save(entity);
				return new UserDTO(entity);
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
		
		private void copyDtoToEntity(UserDTO dto, User entity) {
			entity.setFirstName(dto.getFirstName());;
			entity.setLastName(dto.getLastName());
			entity.setEmail(dto.getEmail());
			
			entity.getRoles().clear();
			for(RoleDTO roleDto : dto.getRoles()) {
				Role role = roleRepository.getOne(roleDto.getId());
				entity.getRoles().add(role);
			}
		} 
}
