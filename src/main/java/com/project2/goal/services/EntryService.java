package com.project2.goal.services;

import com.project2.goal.data.EntryJpaRepository;
import com.project2.goal.models.Entry;
import com.project2.goal.models.Goal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class EntryService {

    private EntryJpaRepository entryRepository;

    @Autowired
    public EntryService(EntryJpaRepository entryRepository){
        this.entryRepository = entryRepository;
    }

    public void createEntry(Entry entry){

        System.out.println(entry);
        Goal x = entry.getGoal();

        System.out.println(x);

        int entryId = entryRepository.save(entry).getEntryId();
        entry.setEntryId(entryId);

    }

    @Transactional
    public List<Entry> getAllEntries(){
        return entryRepository.findAll();
    }



    @Transactional
    public List<Entry> getEntriesBy(Goal goalId){

            List<Entry> t;

            t = entryRepository.findEntriesByGoalIs(goalId);

            return t;

        }



}
