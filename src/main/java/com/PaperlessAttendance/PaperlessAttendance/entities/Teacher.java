package com.PaperlessAttendance.PaperlessAttendance.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;




@Entity
@Table(name="teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name="teacherID")
    private final long teacherID;

    @Column(name="teacherFirstName")
    private final String teacherFirstName;

    @Column(name="teacherLastName")
    private final String teacherLastName;

    @Column(name="teacherUser")
    private final String teacherUser;

    @Column(name="teacherPass")
    private final String teacherPass;

    public Teacher() {
        this.teacherID = 0;
        this.teacherFirstName = "";
        this.teacherLastName = "";
        this.teacherUser = "";
        this.teacherPass = "";

    }

    public Teacher(long id, String firstName, String lastName, String username, String password) {
        this.teacherFirstName = firstName;
        this.teacherLastName = lastName;
        this.teacherUser = username;
        this.teacherPass = password;
        this.teacherID = id;
    }

    public long getTeacherID() {
        return teacherID;
    }

    public String getTeacherFirstName() {
        return teacherFirstName;
    }

    public String getTeacherLastName() {
        return teacherLastName;
    }

    public String getTeacherUser() {
        return teacherUser;
    }

    public String getTeacherPass() {
        return teacherPass;
    }


    @Override
    public String toString() {
        return "Teacher{" + "id=" + teacherID + ", name=" + teacherFirstName + " " + teacherLastName + ", username =" + teacherUser + '}';
    }
}