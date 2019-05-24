package com.cdweb.dao;

import java.util.List;

import com.cdweb.entity.Vacancy;

public interface VacancyDao {
	public void addVacancy(Vacancy v);
	public Vacancy findVacancy(int vacancyId);
	public List<Vacancy> getAllVacancy();
	public void editVacancy(int vacancyId,Vacancy v);
	public void deleteVacancy(int vacancyId);
	

}
