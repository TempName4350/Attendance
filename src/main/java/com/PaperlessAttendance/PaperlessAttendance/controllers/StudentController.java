package com.PaperlessAttendance.PaperlessAttendance.controllers;

import com.PaperlessAttendance.PaperlessAttendance.entities.Student;
import com.PaperlessAttendance.PaperlessAttendance.repositories.StudentRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import com.opencsv.CSVWriter;
import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/users")
    public List<Student> getStudents() {
        return (List<Student>) studentRepository.findAll();
    }

    /*@PostMapping("/users")
    void addUser(@RequestBody Student student) {
        studentRepository.save(student);
    }*/
    @GetMapping("/exportstudents")
    public void exportCSV(HttpServletResponse response) throws Exception {

        //set file name and content type
        String filename = "students.csv";

        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");

        //create a csv writer
        StatefulBeanToCsv<Student> writer = new StatefulBeanToCsvBuilder<Student>(response.getWriter())
                .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
                .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
                .withOrderedResults(false)
                .build();

        //write all users to csv file
        writer.write((List<Student>) studentRepository.findAll());
    }
}