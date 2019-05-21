package com.cdweb.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cdweb.entity.User;

@Repository(value = "userDAO")
@Transactional(rollbackFor = Exception.class)
public class UserDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@Transactional
	public User loadUserByUsername(final String username) {
		List<User> users = new ArrayList<User>();
		Session session = this.sessionFactory.getCurrentSession();
		users = session.createQuery("from user where username=?", User.class).setParameter(0, username).list();
		if (users.size() > 0) {
			System.out.println(users.get(0).getUsername() + " " + users.get(0).getPassword());
			return users.get(0);
		} else {
			return null;
		}

	}
}
