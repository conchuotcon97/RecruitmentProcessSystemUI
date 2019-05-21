package com.cdweb.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.sun.jmx.snmp.Timestamp;

@Entity(name = "vacancy")
public class Vacancy {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idVacancy;

	private String vacancyNumber;
	private Timestamp dateCreated;

	@JoinColumn(name = "idUser")
	@OneToOne
	private User user;

	private String state;

	@JoinColumn(name = "idPosition")
	@OneToOne
	private Position position;

	private String description;
	private int numberOpening;

	@JoinColumn(name = "idDepartment")
	@OneToOne
	private Department department;

	private Timestamp dateClose;
	
	@JoinColumn(name="idVacancy")
	@OneToMany
	private List<ApplicantVacancy> listApplicantVacancy;

	public Vacancy() {
		// TODO Auto-generated constructor stub
	}

	public int getIdVacancy() {
		return idVacancy;
	}

	public void setIdVacancy(int idVacancy) {
		this.idVacancy = idVacancy;
	}

	public String getVacancyNumber() {
		return vacancyNumber;
	}

	public void setVacancyNumber(String vacancyNumber) {
		this.vacancyNumber = vacancyNumber;
	}

	public Timestamp getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Timestamp dateCreated) {
		this.dateCreated = dateCreated;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getNumberOpening() {
		return numberOpening;
	}

	public void setNumberOpening(int numberOpening) {
		this.numberOpening = numberOpening;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public Timestamp getDateClose() {
		return dateClose;
	}

	public void setDateClose(Timestamp dateClose) {
		this.dateClose = dateClose;
	}

	public List<ApplicantVacancy> getListApplicantVacancy() {
		return listApplicantVacancy;
	}

	public void setListApplicantVacancy(List<ApplicantVacancy> listApplicantVacancy) {
		this.listApplicantVacancy = listApplicantVacancy;
	}

}
