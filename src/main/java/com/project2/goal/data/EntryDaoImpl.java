package com.project2.goal.data;

import com.project2.goal.models.Entry;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class EntryDaoImpl implements EntryDao {

    private Map<Integer, Entry> entries = new HashMap<>();
    private AtomicInteger idGen = new AtomicInteger(1);

    @PostConstruct
    private void initEntry(){

    }

    @Override
    public int save(Entry entry) {
        entries.put(idGen.getAndIncrement(),entry);
        return idGen.get() - 1;

    }

    @Override
    public Entry findAllEntry(int goalId) {
        return null;
    }
}
