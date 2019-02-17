package com.project2.goal.data;

import com.project2.goal.models.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoalJpaRepository extends JpaRepository<Goal, Integer> {
//    public List<Goal> findGoalsBy(int userId);
//    public Goal findBy(int entryId);


}
