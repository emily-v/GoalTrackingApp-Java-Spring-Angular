package com.project2.goal.data;

import com.project2.goal.models.Entry;
import com.project2.goal.models.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntryJpaRepository extends JpaRepository<Entry, Integer> {
    List<Entry> findEntriesByGoalIs(Goal goalId);

}
