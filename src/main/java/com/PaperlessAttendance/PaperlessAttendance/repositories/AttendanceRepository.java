package com.PaperlessAttendance.PaperlessAttendance.repositories;

import com.PaperlessAttendance.PaperlessAttendance.entities.Attendance;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.data.jpa.repository.Query;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface AttendanceRepository extends CrudRepository<Attendance, Long> {
}