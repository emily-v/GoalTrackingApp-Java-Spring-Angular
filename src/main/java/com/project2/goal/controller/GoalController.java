package com.project2.goal.controller;

import com.project2.goal.models.Goal;
import com.project2.goal.services.GoalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import java.awt.*;
import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("api/goals")
public class GoalController {

    private GoalService goalService;

    public GoalController(){}

    @Autowired
    public void setGoalService(GoalService goalService){
        this.goalService = goalService;
    }

    // this will get ALL goals
    @GetMapping(path="/all", produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Goal> requestAllGoals() {
    	return this.goalService.getAllGoals();
    }
    
    // this is attempting to get goals by userid
    @GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Goal> requestAllUserGoals(@RequestParam(name="userid") int userid) {
    	return this.goalService.getAllUserGoals(userid);
    }
    
    // this gets one specific goal
    @GetMapping(path="/goal", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Goal> requestGoalById(@RequestParam(name="goalid") int goalid) {
    	Goal g = goalService.getById(goalid);
    	if (g != null) {
    		return new ResponseEntity<>(g, HttpStatus.OK);
    	}
    	return new ResponseEntity<>((Goal)null, HttpStatus.NOT_FOUND);
    }
    
    // trying to be able to post with User
//    @PostMapping(
//            path ="/goal",
//            consumes = MediaType.APPLICATION_JSON_VALUE,
//            produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<Goal> requestToCreateGoal(@RequestParam(name="userid") int userid) @RequestBody Goal newGoal){
//        goalService.createGoal(newGoal);
//        if(newGoal.getGoalId() > 0){
//            HttpHeaders headers = new HttpHeaders();
//            headers.set("Location", "http://localhost:8080/goals/goal");
//            return new ResponseEntity<>(newGoal,headers, HttpStatus.CREATED);
//        }
//        return new ResponseEntity<>((Goal)null,HttpStatus.INTERNAL_SERVER_ERROR);
//    }
    
    // this was working when plain userid mapped to goal - not with User
    @PostMapping(
            path ="/goal",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Goal> requestToCreateGoal(@RequestBody Goal newGoal){
        newGoal.setDate(new Timestamp(System.currentTimeMillis()));

        goalService.createGoal(newGoal);
        if(newGoal.getGoalId() > 0){
            HttpHeaders headers = new HttpHeaders();
            headers.set("Location", "http://localhost:8080/api/goals/goal");
            return new ResponseEntity<>(newGoal,headers, HttpStatus.CREATED);
        }
        return new ResponseEntity<>((Goal)null,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    @DeleteMapping("/goal/{goalid}")
    public ResponseEntity requestToDeleteGoal(@PathVariable int goalid) {
    	goalService.deleteGoal(goalid);
    	return new ResponseEntity(HttpStatus.OK);
    }
}
