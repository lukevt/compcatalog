package com.lfcsvtjava.DsCatalog.dto;

import java.io.Serializable;

import com.lfcsvtjava.DsCatalog.entities.Category;

public class CategoryDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	
	public CategoryDTO() {
		
	}

	public CategoryDTO(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public CategoryDTO(Category Entity) {
		this.id = Entity.getId();
		this.name = Entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
