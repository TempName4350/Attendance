package com.PaperlessAttendance.PaperlessAttendance.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
@Table(name="student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name="pantherID")
    private final String pantherID;

    @Column(name="studentFirstName")
    private final String studentFirstName;

    @Column(name="studentLastName")
    private final String studentLastName;

    @Column(name="studentEmail")
    private final String studentEmail;
    
    public Student() {
        this.studentFirstName = "";
        this.studentLastName = "";
        this.studentEmail = "";
        this.pantherID = "";
    }
    
    public Student(String firstName, String lastName, String email, String id) {
        this.studentFirstName = firstName;
        this.studentLastName = lastName;
        this.studentEmail = email;
        this.pantherID = id;
    }

    public String getId() {
        return pantherID;
    }
    
    public String getFirstName() {
        return studentFirstName;
    }

    public String getLastName() {
        return studentLastName;
    }
    
    public String getEmail() {
        return studentEmail;
    }
    
    @Override
    public String toString() {
        return "Student{" + "id=" + pantherID + ", name=" + studentFirstName + " " + studentLastName + ", email=" + studentEmail + '}';
    }
}