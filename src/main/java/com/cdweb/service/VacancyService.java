package com.cdweb.service;

import java.util.List;

import com.cdweb.entity.Vacancy;

public interface VacancyService {
	public void addVacancy(Vacancy v);
	public Vacancy findVacancy(int vacancyId);
	public List<Vacancy> getAllVacancy();
	public void editVacancy(int vacancyId,Vacancy v);
	public void deleteVacancy(int vacancyId);

}
