package com.cdweb.dao;

import java.nio.channels.SeekableByteChannel;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cdweb.entity.Vacancy;
@Repository
public class VacancyDaoImpl implements VacancyDao{
	@Autowired
private SessionFactory sessionFactory;
	public void addVacancy(Vacancy v) {
sessionFactory.getCurrentSession().save(v);
		
	}

	public Vacancy findVacancy(int vacancyId) {
		return sessionFactory.getCurrentSession().get(Vacancy.class, vacancyId);
	}

	public List<Vacancy> getAllVacancy() {
		Session session= sessionFactory.getCurrentSession();
		CriteriaBuilder cb= session.getCriteriaBuilder();
		CriteriaQuery<Vacancy> cq= cb.createQuery(Vacancy.class);
		Root<Vacancy>root= cq.from(Vacancy.class);
		cq.select(root);
		Query<Vacancy> query=session.createQuery(cq);
		return query.getResultList() ;
	}

	public void editVacancy(int vacancyId,Vacancy v) {
		Session session= sessionFactory.getCurrentSession();
		Vacancy orign= session.byId(Vacancy.class).load(vacancyId);
		orign.setDateClose(v.getDateClose());
		orign.setDateCreated(v.getDateCreated());
		orign.setDepartment(v.getDepartment());
		orign.setDescription(v.getDescription());
		orign.setNumberOpening(v.getNumberOpening());
		orign.setPosition(v.getPosition());
		orign.setState(v.getState());
		orign.setUser(v.getUser());
		orign.setVacancyNumber(v.getVacancyNumber());
		session.flush();
		
	}

	public void deleteVacancy(int vacancyId) {
		Session session= sessionFactory.getCurrentSession();
		Vacancy orign= session.byId(Vacancy.class).load(vacancyId);
		session.delete(orign);
	}

	

}
