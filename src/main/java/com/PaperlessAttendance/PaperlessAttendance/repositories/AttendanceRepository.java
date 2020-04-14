package com.PaperlessAttendance.PaperlessAttendance.repositories;

import com.PaperlessAttendance.PaperlessAttendance.entities.Attendance;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface AttendanceRepository extends CrudRepository<Attendance, Long> {
    // get all students for date ID
    @Query(value = "SELECT * FROM attendence u WHERE u.dateID = dateID", 
  nativeQuery = true)
    public Iterable<Attendance> findStudentsByDateID(@Param("dateID") Long dateID);
}