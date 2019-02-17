package com.project2.goal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@Controller
@EnableTransactionManagement
@EnableJpaRepositories
public class GoalApplication {

    public static void main(String[] args) {
        SpringApplication.run(GoalApplication.class, args);
    }

}

