package com.PaperlessAttendance.PaperlessAttendance.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;

@Entity
@Table(name="attendence")
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name="attendID")
    private final long attendID;

    @Column(name="pantherID")
    private final long pantherID;

    @Column(name="dateID")
    private final long dateID;
    
    public Attendance() {
        this.attendID = 0;
        this.pantherID = 0;
        this.dateID = 0;
    }
    
    public Attendance(long attendID, long pantherID, long dateID) {
        this.attendID = attendID;
        this.pantherID = pantherID;
        this.dateID = dateID;
    }

    public long getPantherID() {
        return pantherID;
    }
    
    public long getAttendID() {
        return attendID;
    }
    
    public long getDateID() {
        return dateID;
    }

    @Override
    public String toString() {
        return "Attendance{" + "pantherID=" + pantherID + ", attendID=" + attendID + ", dateID=" + dateID + '}';
    }
}