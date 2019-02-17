package com.project2.goal.services;

import com.project2.goal.data.GoalDao;
import com.project2.goal.data.GoalJpaRepository;
import com.project2.goal.models.Goal;
import com.project2.goal.models.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class GoalService {

    private GoalJpaRepository goalRepository;
    private UserService userService;

    @Autowired
    public GoalService(GoalJpaRepository goalRepository){
        this.goalRepository = goalRepository;
    }
    
    
    @Transactional(readOnly=true) 
	public List<Goal> getAllGoals() {
		return goalRepository.findAll();

	}
    
 // Better way to do this using UserService?
    @Transactional(readOnly=true)
    public List<Goal> getAllUserGoals(int userid) {
    	List<Goal> allGoals = goalRepository.findAll();
    	List<Goal> userGoals = new ArrayList <Goal>();
    	for (Goal g : allGoals) {
    		if (g.getUser().getUserId() == userid) {
    			userGoals.add(g);
    		}
    	}
    	return userGoals;
    }
    
//    // Better way to do this using UserService?
//    @Transactional(readOnly=true)
//    public List<Goal> getAllUserGoals(int userid) {
//    	List<Goal> allGoals = goalRepository.findAll();
//    	List<Goal> userGoals = new ArrayList <Goal>();
//    	for (Goal g : allGoals) {
//    		if (g.getUser().getUserId() == userid) {
//    			userGoals.add(g);
//    		}
//    	}
//    	return userGoals;
//    }
    
    @Transactional(readOnly=true)
    public Goal getById(int goalid) {
    	Optional<Goal> g;
    	g = goalRepository.findById(goalid);
    	if (g.isPresent()) {
    		return g.get();
    	} else {
    		return null;
    	}
    }

    @Transactional
    public void createGoal(Goal goal){
    	System.out.println(goal);
    	User x = goal.getUser();
   
//		User u = userService.getById(x.getUserId());
		System.out.println(x);
       
    	int goalId = goalRepository.save(goal).getGoalId();
        goal.setGoalId(goalId);
        
    }
    
    public void deleteGoal(int goalid) {
    	goalRepository.deleteById(goalid);
    }
}
