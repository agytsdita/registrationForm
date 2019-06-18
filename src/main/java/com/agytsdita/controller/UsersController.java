package com.agytsdita.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.agytsdita.entity.Users;
import com.agytsdita.service.IUsersService;

@Controller
@RequestMapping("users")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UsersController {
	@Autowired
	private IUsersService userService;
	

	@PostMapping("users")
	public ResponseEntity<Void> createArticle(@RequestBody Users usr, UriComponentsBuilder builder) {
        boolean flag = userService.createUsers(usr);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/registration?id={userId}").buildAndExpand(usr.getUserId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
} 