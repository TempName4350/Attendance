package com.PaperlessAttendance.PaperlessAttendance.controllers;

import com.PaperlessAttendance.PaperlessAttendance.entities.Student;
import com.PaperlessAttendance.PaperlessAttendance.repositories.StudentRepository;
import java.util.List;

import com.fasterxml.jackson.databind.MappingIterator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import com.opencsv.CSVWriter;
import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
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

    @RequestMapping(value="/uploadstudents", method = RequestMethod.POST) 
    public void uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            if (file != null) {
                System.out.println(file.getOriginalFilename());
            }
            String content = new String(file.getBytes());
            System.out.println(content);
            CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader();
            CsvMapper mapper = new CsvMapper();
            MappingIterator<Student> readValues = mapper.readerFor(Student.class).with(bootstrapSchema).readValues(content);
            List<Student> allValues= readValues.readAll();

            for (int i = 0; i < allValues.size(); i++) {
                long id = allValues.get(i).getPantherID();
                if (studentRepository.existsById(id)) {
                    System.out.println(allValues.get(i) + " already exists in DB");
                    continue;
                }
                System.out.println(allValues.get(i) + " has been uploaded");
                studentRepository.save(allValues.get(i));
            }
        } catch (Exception e) {
            System.out.println("AN ERROR HAS OCCURRED - ");
            System.out.println(e);
        }
    }
}