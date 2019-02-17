package com.project2.goal.data;

import com.project2.goal.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserJpaRepository extends JpaRepository<User,Integer> {

//     User update(int userId);
//     List<User> findAllBy();
//     User findUserBy(int id);
//     void deleteUserBy(int userId);
	
	User findUserByEmail(String email);
	//User findUserByEmailAndPassword(String email, String password);



}
