package com.cdweb.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "position")
public class Position {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPosition;

	private String positionName;

	@OneToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "idPosition")
	@JsonIgnore
	private List<User> listUser;
	
	@OneToMany
	@JoinColumn(name = "idPosition")
	@JsonIgnore
	private List<Vacancy> listVacancy;;

	public Position(String positionName, List<User> listUser) {
		super();
		this.positionName = positionName;
		this.listUser = listUser;
	}

	public Position() {
		// TODO Auto-generated constructor stub
	}

	public int getIdPosition() {
		return idPosition;
	}

	public void setIdPosition(int idPosition) {
		this.idPosition = idPosition;
	}

	public String getPositionName() {
		return positionName;
	}

	public void setPositionName(String positionName) {
		this.positionName = positionName;
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
