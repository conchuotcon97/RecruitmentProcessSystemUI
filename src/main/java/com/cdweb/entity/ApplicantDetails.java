package com.cdweb.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.sun.jmx.snmp.Timestamp;

@Entity(name = "applicant_details")
public class ApplicantDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idApplicantDetails;

	@JoinColumn(name = "idapplicantVacancy")
	@OneToOne
	private ApplicantVacancy applicantVacancy;

	private Timestamp dateCreate;;
	private String state;

	public ApplicantDetails(ApplicantVacancy applicantVacancy, Timestamp dateCreate, String state) {
		super();
		this.applicantVacancy = applicantVacancy;
		this.dateCreate = dateCreate;
		this.state = state;
	}

	public ApplicantDetails() {
		// TODO Auto-generated constructor stub
	}

	public int getIdApplicantDetails() {
		return idApplicantDetails;
	}

	public void setIdApplicantDetails(int idApplicantDetails) {
		this.idApplicantDetails = idApplicantDetails;
	}

	public ApplicantVacancy getApplicantVacancy() {
		return applicantVacancy;
	}

	public void setApplicantVacancy(ApplicantVacancy applicantVacancy) {
		this.applicantVacancy = applicantVacancy;
	}

	public Timestamp getDateCreate() {
		return dateCreate;
	}

	public void setDateCreate(Timestamp dateCreate) {
		this.dateCreate = dateCreate;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
}
