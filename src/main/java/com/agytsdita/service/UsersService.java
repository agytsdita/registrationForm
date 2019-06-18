package com.agytsdita.service;


import org.springframework.stereotype.Service;

import com.agytsdita.dao.SUsersDAO;
import com.agytsdita.entity.Users;
@Service
public class UsersService implements IUsersService {
	private SUsersDAO userDAO;
	
	public UsersService(SUsersDAO userDAO){
		this.userDAO = userDAO;
	}
	
	public boolean createUsers(Users user) {
		if (userDAO.isEmailRegistered(user.getEmail())) {
	    	   return false;
	       } else {
	    	   userDAO.createUser(user);
	    	   return true;
	       }
	}	
}
