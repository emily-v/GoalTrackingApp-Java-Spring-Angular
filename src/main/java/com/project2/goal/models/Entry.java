package com.project2.goal.models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "goals_ENTRY")
public class Entry {
    public Entry(){}


    public Entry(Goal goal, int amount, Timestamp timestamp) {
        this.goal = goal;
        this.amount = amount;
        this.timestamp = timestamp;

    }

    @Id
    @Column(name = "ENTRYID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int entryId;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "GOALID")
    private Goal goal;


    private int amount;


    private Timestamp timestamp;



    public int getEntryId() {
        return entryId;
    }

    public void setEntryId(int entryId) {
        this.entryId = entryId;
    }

    public Goal getGoal() {
        return goal;
    }

    public void setGoal(Goal goal) {
        this.goal = goal;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }


    @Override
    public String toString() {
        return "EntryDaoImpl{" +
                "entryId=" + entryId +
                ", goal=" + goal +
                ", amount=" + amount +
                ", timestamp=" + timestamp +
                '}';
    }
}
