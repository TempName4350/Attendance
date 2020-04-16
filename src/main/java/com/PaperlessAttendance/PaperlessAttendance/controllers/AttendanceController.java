package com.PaperlessAttendance.PaperlessAttendance.controllers;

import com.PaperlessAttendance.PaperlessAttendance.entities.Attendance;
import com.PaperlessAttendance.PaperlessAttendance.repositories.AttendanceRepository;
import com.PaperlessAttendance.PaperlessAttendance.entities.DateAttend;
import com.PaperlessAttendance.PaperlessAttendance.repositories.DateAttendRepository;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

import com.fasterxml.jackson.databind.MappingIterator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletResponse;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AttendanceController {

    private final AttendanceRepository attendanceRepository;
    private final DateAttendRepository dateAttendRepository;

    public AttendanceController(AttendanceRepository attendanceRepository, DateAttendRepository dateAttendRepository) {
        this.attendanceRepository = attendanceRepository;
        this.dateAttendRepository = dateAttendRepository;
    }

    @GetMapping("/viewattendancedate")
    public List<Attendance> getAttendance() {
        return (List<Attendance>) attendanceRepository.findAll();
    }

    @PostMapping("/session")
    public void addStudentAttendance (@RequestBody Attendance attendanceRecord) {
        Attendance attendance = attendanceRecord;
        attendanceRepository.save(attendance);
    }

    @GetMapping("/viewstudentattendance")
    public List<DateAttend> getAttendance(@RequestParam("pantherID") String pantherID) {
        Long pantherIDInput = Long.parseLong(pantherID);

        Iterable<Attendance> attendanceForID = attendanceRepository.findAll();
        Iterator<Attendance> h = attendanceForID.iterator();
        ArrayList<DateAttend> d = new ArrayList<DateAttend>();
        while (h.hasNext()) {
            Attendance a = h.next();
            if (a.getPantherID() == pantherIDInput) {
                List<Long> dateID = Arrays.asList(a.getDateID());
                Iterable<DateAttend> dateAttendForAttendance = dateAttendRepository.findAllById(dateID);
                Iterator<DateAttend> b = dateAttendForAttendance.iterator();
                while (b.hasNext()) {
                    DateAttend currentDate = b.next();
                    if (currentDate.getAttended().equals("no")) {
                        d.add(currentDate);
                    }
                }
            }
        }
        return (ArrayList<DateAttend>) d;
    }

}