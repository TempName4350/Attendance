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
@Table(name="student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name="pantherID")
    @CsvBindByPosition(position = 1)
    private final long pantherID;

    @Column(name="studentFirstName")
    @CsvBindByPosition(position = 0)
    private final String studentFirstName;

    @Column(name="studentLastName")
    @CsvBindByPosition(position = 2)
    private final String studentLastName;

    @Column(name="studentEmail")
    @CsvBindByPosition(position = 3)
    private final String studentEmail;
    
    public Student() {
        this.studentFirstName = "";
        this.studentLastName = "";
        this.studentEmail = "";
        this.pantherID = 0;
    }
    
    public Student(String firstName, String lastName, String email, long id) {
        this.studentFirstName = firstName;
        this.studentLastName = lastName;
        this.studentEmail = email;
        this.pantherID = id;
    }

    public long getPantherID() {
        return pantherID;
    }
    
    public String getStudentFirstName() {
        return studentFirstName;
    }

    public String getStudentLastName() {
        return studentLastName;
    }
    
    public String getStudentEmail() {
        return studentEmail;
    }
    
    @Override
    public String toString() {
        return "Student{" + "id=" + pantherID + ", name=" + studentFirstName + " " + studentLastName + ", email=" + studentEmail + '}';
    }
}