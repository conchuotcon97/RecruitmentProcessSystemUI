package com.cdweb.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name="interviewer_scheduleinterview")
public class InterviewerScheduleInterview {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idInterviewSI;
	
	@JoinColumn(name="idUser")
	@OneToOne
	private User user;
	
	@JoinColumn(name="idSchedule")
	@OneToOne
	private ScheduleInterviewDetails scheduleInterviewDetails;

	public int getIdInterviewSI() {
		return idInterviewSI;
	}

	public void setIdInterviewSI(int idInterviewSI) {
		this.idInterviewSI = idInterviewSI;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ScheduleInterviewDetails getScheduleInterviewDetails() {
		return scheduleInterviewDetails;
	}

	public void setScheduleInterviewDetails(ScheduleInterviewDetails scheduleInterviewDetails) {
		this.scheduleInterviewDetails = scheduleInterviewDetails;
	}
}
