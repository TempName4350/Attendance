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
@Table(name="dateAttend")
public class DateAttend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="dateID")
    private final long dateID;

    @Column(name="dateOfClass")
    private final String date;

    @Column(name="attended")
    private final String attended;
    
    public DateAttend() {
        this.attended = "";
        this.date = "";
        this.dateID = 0;
    }
    
    public DateAttend(String date, String attended, long dateID) {
        this.attended = attended;
        this.date = date;
        this.dateID = dateID;
    }

    public String getAttended() {
        return attended;
    }
    
    public String getDate() {
        return date;
    }
    
    public long getDateID() {
        return dateID;
    }

    @Override
    public String toString() {
        return "dateAttend{" + "date=" + date + ", attended=" + attended + ", dateID=" + dateID + '}';
    }
}