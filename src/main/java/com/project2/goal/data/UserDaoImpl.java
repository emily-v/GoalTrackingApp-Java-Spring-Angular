package com.project2.goal.data;

import com.project2.goal.models.User;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

public class UserDaoImpl implements UserDao {

    private Map<Integer, User> users = new HashMap<>();
    private AtomicInteger idGen = new AtomicInteger(1);

    @PostConstruct
    private void initUsers(){
    }

//    @Override
//    public int save(User u){
//        users.put(idGen.getAndIncrement(),u);
//        return idGen.get() -1;
//    }

//    @Override
//    public User findBy(int userId){
//        return users.values().stream()
//                .filter(user -> user.getUserId()== userId)
//                .findFirst()
//                .get();
//    }



}
