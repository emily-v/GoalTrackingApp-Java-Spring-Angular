package com.project2.goal.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "goals_GOAL")
public class Goal {

    public Goal(){}

    public Goal( String category, float target) {

        this.category = category;
        this.target = target;

    }

    @Id
    @Column(name = "GOALID")
    @GeneratedValue
    private int goalId;

    @Column(name = "Title")
    private String title;

//    fitness(walking, running, lifting) mental(sleeping, reading, meditating) nutrition(veggies, fruits, proteins, carbs)
//    @ManyToOne(cascade = CascadeType.ALL, fetch= FetchType.EAGER)
//    @JoinColumn(name = "CATEGORYID",nullable = false)
    @Column(name = "CATEGORY", nullable = false)
    private String category;


//    //arbitrary value you want to reach
    @Column(name = "TARGET", nullable = false)
    private float target;

    @Column(name = "UNIT")
    private String unit;
    
    // attempting to require only userid instead of User - not working
//    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JoinTable(name = "goals_USER",
//    		joinColumns = @JoinColumn(name="USERID"))
//    private int userid;
    
 // requires whole User object to be sent with goal Post request
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "USERID",nullable = false)
    private User user;

    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getGoalId() {
        return goalId;
    }

    public void setGoalId(int goalId) {
        this.goalId = goalId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public float getTarget() {
        return target;
    }

    public void setTarget(float target) {
        this.target = target;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    
//	public int getUserid() {
//		return userid;
//	}
//
//	public void setUserid(int userid) {
//		this.userid = userid;
//	}

    
    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Goal{" +
//                "goalId=" + goalId +
                ", title='" + title + '\'' +
                ", category='" + category + '\'' +
                ", target=" + target +
                ", unit='" + unit + '\'' +
                ", user=" + user +
                ". date=" + date +
                '}';
    }
}

