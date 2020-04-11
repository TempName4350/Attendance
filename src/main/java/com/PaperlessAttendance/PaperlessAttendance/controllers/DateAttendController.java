package com.PaperlessAttendance.PaperlessAttendance.controllers;

import com.PaperlessAttendance.PaperlessAttendance.entities.DateAttend;
import com.PaperlessAttendance.PaperlessAttendance.repositories.DateAttendRepository;
import java.util.List;

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



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DateAttendController {

    private final DateAttendRepository dateAttendRepository;

    public DateAttendController(DateAttendRepository dateAttendRepository) {
        this.dateAttendRepository = dateAttendRepository;
    }

   }