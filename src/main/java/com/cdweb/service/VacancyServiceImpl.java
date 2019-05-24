package com.cdweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdweb.dao.VacancyDao;
import com.cdweb.entity.Vacancy;

@Service
@Transactional(readOnly = true)
public class VacancyServiceImpl implements VacancyService {
	@Autowired
	private VacancyDao vacancyDao;

	@Transactional
	public void addVacancy(Vacancy v) {
		vacancyDao.addVacancy(v);

	}

	public Vacancy findVacancy(int vacancyId) {
		return vacancyDao.findVacancy(vacancyId);
	}

	public List<Vacancy> getAllVacancy() {
		return vacancyDao.getAllVacancy();
	}

	@Transactional
	public void editVacancy(int vacancyId, Vacancy v) {
		vacancyDao.editVacancy(vacancyId, v);
	}

	@Transactional
	public void deleteVacancy(int vacancyId) {
		vacancyDao.deleteVacancy(vacancyId);
	}

}
