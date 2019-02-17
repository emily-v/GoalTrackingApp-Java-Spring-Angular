package com.project2.goal.controller;

import com.project2.goal.models.Entry;
import com.project2.goal.models.Goal;
import com.project2.goal.services.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("api/entries")
public class EntryController {

    private EntryService entryService;

    public EntryController(){}

    @Autowired
    public void setEntryService(EntryService entryService){
        this.entryService = entryService;
    }

    @GetMapping(path = "entry", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Entry> requestAllEntryByGoal(@RequestParam(name = "goalId") Goal goalId){

        List<Entry> e = entryService.getEntriesBy(goalId);

        return e;
    }

    @GetMapping(path="/all", produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Entry> requestAllEntries() {
        return this.entryService.getAllEntries();
    }



    @PostMapping(
            path = "/entry",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Entry>requestToCreateEntry(@RequestBody Entry newEntry){
        newEntry.setTimestamp(new Timestamp(System.currentTimeMillis()));
        entryService.createEntry(newEntry);

        if(newEntry != null){
            HttpHeaders headers = new HttpHeaders();
            headers.set("Location", "http://localhost:8080/entries/entry.ts");
            return new ResponseEntity<>(newEntry, headers, HttpStatus.CREATED);
        }
        return new ResponseEntity<> ((Entry)null, HttpStatus.INTERNAL_SERVER_ERROR);
    }




}
