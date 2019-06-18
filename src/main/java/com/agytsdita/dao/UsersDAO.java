package com.agytsdita.dao;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.agytsdita.entity.Users;

@Transactional
@Repository
public class UsersDAO implements SUsersDAO {
	
	@PersistenceContext	
	public EntityManager entityManager;

	public void createUser(Users user) {
		entityManager.persist(user);
	}

	public boolean isEmailRegistered(String email) {
		String hql = "FROM Users as usr WHERE usr.email = ?";
		int count = entityManager.createQuery(hql).setParameter(1, email).getResultList().size();
		return count > 0 ? true : false;
	}
}
