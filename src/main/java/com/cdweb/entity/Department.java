package com.cdweb.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity(name = "department")
public class Department {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idDepartment;

	private String departmentName;

	@OneToMany()
	@JoinColumn(name = "idDepartment")
	private List<User> listUser = new ArrayList<User>();
	
	@OneToMany
	@JoinColumn(name="idDepartment")
	private List<Vacancy> listVacancy;

	public Department(String departmentName, List<User> listUser) {
		super();
		this.departmentName = departmentName;
		this.listUser = listUser;
	}

	public Department() {
		// TODO Auto-generated constructor stub
	}

	public int getIdDepartment() {
		return idDepartment;
	}

	public void setIdDepartment(int idDepartment) {
		this.idDepartment = idDepartment;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public List<User> getListUser() {
		return listUser;
	}

	public void setListUser(List<User> listUser) {
		this.listUser = listUser;
	}

	public List<Vacancy> getListVacancy() {
		return listVacancy;
	}

	public void setListVacancy(List<Vacancy> listVacancy) {
		this.listVacancy = listVacancy;
	}

}
