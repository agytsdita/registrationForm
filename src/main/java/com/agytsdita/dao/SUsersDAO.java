package com.agytsdita.dao;

import com.agytsdita.entity.Users;

public interface SUsersDAO {
	
	void createUser(Users user) ;
	boolean isEmailRegistered(String email);
}
 