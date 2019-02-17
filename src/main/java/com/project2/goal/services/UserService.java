package com.project2.goal.services;

import com.project2.goal.data.UserJpaRepository;
import com.project2.goal.models.User;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService  {

    private UserJpaRepository userRepository;

    @Autowired
    public UserService(UserJpaRepository userRepository){
        this.userRepository = userRepository;
    }
    
    @Transactional(readOnly=true)
    public User getById(int userid) {
    	Optional<User> u;
    	u = userRepository.findById(userid);
    	if (u.isPresent()) {
    		return u.get();
    	} else {
    		return null;
    	}
    }
    
    @Transactional(readOnly=true)
    public User getByEmail(String email) {
    	User u;
    	u = userRepository.findUserByEmail(email);
    	if (u != null) {
    		return u;
    	} else {
    		return null;
    	}
    }

    @Transactional
    public User authUser(String email, String password) {
    	User temp = userRepository.findUserByEmail(email);
		System.out.println(temp);
    	if (temp == null) {
    		System.out.println("temp user is null");
    		return null;
    	} else {
    		if (temp.getPassword().equals(password)) {
    			System.out.println("temp user: " + temp);
    			return temp;
    		} else {
    			System.out.println("password is incorrect");
    		}
    	}
    	return null;
    }

    @Transactional
    public void createUser(User user){
        int userId = userRepository.save(user).getUserId();
        user.setUserId(userId);

    }

}
