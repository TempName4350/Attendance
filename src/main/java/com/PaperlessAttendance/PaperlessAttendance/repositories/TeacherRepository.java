package com.PaperlessAttendance.PaperlessAttendance.repositories;

import com.PaperlessAttendance.PaperlessAttendance.entities.Teacher;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface TeacherRepository extends CrudRepository<Teacher, Long> {
}