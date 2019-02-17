package com.project2.goal.data;

import com.project2.goal.models.Goal;
import com.project2.goal.models.User;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

public class GoalDaoImpl implements GoalDao{

    private Map<Integer, Goal> goals = new HashMap<>();
    private AtomicInteger idGen = new AtomicInteger(1);

    @PostConstruct
    private void initGoals(){

    }

    // will remove when findGoalsByUserId is working
//    @Override
//    public List<Goal> findAll() {
//    	return goals.entrySet().stream()
//                .map(entry.ts -> entry.ts.getValue())
//                .collect(Collectors.toList());
//    }
    
    
//    @Override
//    public List<Goal> findGoalsByUserId(int userId){
//        return goals.entrySet().stream()
//                .map(entry.ts -> entry.ts.getValue())
//                .collect(Collectors.toList());
//    }
    

//    @Override
//    public int save(Goal goal){
//        goals.put(idGen.getAndIncrement(),goal);
//                return idGen.get() - 1;
//    }



}
