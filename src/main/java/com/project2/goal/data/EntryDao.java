package com.project2.goal.data;

import com.project2.goal.models.Entry;

public interface EntryDao {
    int save(Entry entry);
    Entry findAllEntry(int goalId);

}
