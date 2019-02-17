package com.project2.goal.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project2.goal.models.User;
import com.project2.goal.services.UserService;

@RestController // don't need @ResponseBody
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("api/users")

public class UserController {
	
	private UserService userService;
	
	public UserController() {}
	
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	// GET USER BY ID
//	@GetMapping(path="/user", produces=MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<User> requestUserById(@RequestParam(name="userid") int userid) {
//		User u = userService.getById(userid);
//		if (u != null) {
//			return new ResponseEntity<> (u, HttpStatus.OK);
//		}
//		return new ResponseEntity<>((User) null, HttpStatus.NOT_FOUND);
//	}
	
	// GET USER BY EMAIL
	@GetMapping(path="/user", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> requestUserByEmail(@RequestParam(name="email") int userId) {
		User u = userService.getById(userId);
		if (u != null) {
			return new ResponseEntity<> (u, HttpStatus.OK);
		}
		return new ResponseEntity<>((User) null, HttpStatus.NOT_FOUND);
	}
	
	// CREATE NEW USER
	@PostMapping(
			path="/user",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> requestToCreateAUser(@RequestBody User newUser) {
		userService.createUser(newUser);

		
		if(newUser.getUserId() > 0) {
			HttpHeaders headers = new HttpHeaders();
			headers.set("Location", "http://localhost:8080/users/user?id=" + newUser.getUserId());
			return new ResponseEntity<>(newUser, headers, HttpStatus.CREATED);
		}
		return new ResponseEntity<>((User)null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// AUTHENTICATE USER
	@PostMapping(
			path="/auth",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> requestToAuthenticateUser(@RequestBody String data) throws JsonParseException, JsonMappingException, IOException {
		
		ObjectMapper om = new ObjectMapper();
		User temp = om.readValue(data, User.class);
		String email = temp.getEmail();
		String password = temp.getPassword();

		User u = userService.authUser(temp.getEmail(), temp.getPassword());

		System.out.println(u);
		if(u.getUserId() > 0) {
			HttpHeaders headers = new HttpHeaders();
			headers.set("Location", "http://localhost:8080/users/user?id=" + u.getUserId());
			return new ResponseEntity<>(u, headers, HttpStatus.CREATED);
		}
		return new ResponseEntity<>((User)null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
