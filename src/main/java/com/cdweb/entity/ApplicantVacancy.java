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

@Entity(name = "applicant_vacancy")
public class ApplicantVacancy {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idApplicantVacancy;
	private String applicantVacancy;
	private String applicantVacancyName;
	private String emailApplicant;

	@JoinColumn(name = "idVacancy")
	@OneToOne
	private Vacancy vacancy;

	private Timestamp dateOnApplicantVacancy;
	private String state;
	private String cv;

	@JoinColumn(name = "idSchedule")
	@OneToOne
	private ScheduleInterviewDetails scheduleInterviewDetails;
	
	@JoinColumn(name="idApplicantVacancy")
	@OneToMany
	private List<ApplicantDetails> listApplicantDetails;

	public ApplicantVacancy(String applicantVacancy, String applicantVacancyName, String emailApplicant,
			Vacancy vacancy, Timestamp dateOnApplicantVacancy, String state, String cv,
			ScheduleInterviewDetails scheduleInterviewDetails) {
		super();
		this.applicantVacancy = applicantVacancy;
		this.applicantVacancyName = applicantVacancyName;
		this.emailApplicant = emailApplicant;
		this.vacancy = vacancy;
		this.dateOnApplicantVacancy = dateOnApplicantVacancy;
		this.state = state;
		this.cv = cv;
		this.scheduleInterviewDetails = scheduleInterviewDetails;
	}

	public ApplicantVacancy() {
		// TODO Auto-generated constructor stub
	}

	public int getIdApplicantVacancy() {
		return idApplicantVacancy;
	}

	public void setIdApplicantVacancy(int idApplicantVacancy) {
		this.idApplicantVacancy = idApplicantVacancy;
	}

	public String getApplicantVacancy() {
		return applicantVacancy;
	}

	public void setApplicantVacancy(String applicantVacancy) {
		this.applicantVacancy = applicantVacancy;
	}

	public String getApplicantVacancyName() {
		return applicantVacancyName;
	}

	public void setApplicantVacancyName(String applicantVacancyName) {
		this.applicantVacancyName = applicantVacancyName;
	}

	public String getEmailApplicant() {
		return emailApplicant;
	}

	public void setEmailApplicant(String emailApplicant) {
		this.emailApplicant = emailApplicant;
	}

	public Vacancy getVacancy() {
		return vacancy;
	}

	public void setVacancy(Vacancy vacancy) {
		this.vacancy = vacancy;
	}

	public Timestamp getDateOnApplicantVacancy() {
		return dateOnApplicantVacancy;
	}

	public void setDateOnApplicantVacancy(Timestamp dateOnApplicantVacancy) {
		this.dateOnApplicantVacancy = dateOnApplicantVacancy;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCv() {
		return cv;
	}

	public void setCv(String cv) {
		this.cv = cv;
	}

	public ScheduleInterviewDetails getScheduleInterviewDetails() {
		return scheduleInterviewDetails;
	}

	public void setScheduleInterviewDetails(ScheduleInterviewDetails scheduleInterviewDetails) {
		this.scheduleInterviewDetails = scheduleInterviewDetails;
	}

	public List<ApplicantDetails> getListApplicantDetails() {
		return listApplicantDetails;
	}

	public void setListApplicantDetails(List<ApplicantDetails> listApplicantDetails) {
		this.listApplicantDetails = listApplicantDetails;
	}
}
