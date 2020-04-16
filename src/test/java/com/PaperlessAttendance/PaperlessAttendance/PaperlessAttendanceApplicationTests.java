package com.PaperlessAttendance.PaperlessAttendance;

import com.PaperlessAttendance.PaperlessAttendance.controllers.StudentController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.containsString;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

@SpringBootTest
class PaperlessAttendanceApplicationTests {


    @Autowired
    private StudentController controller;

    //Export Tests
    //Export CSV test with wrong input
    @Test
    void exportCSVWrong() throws Exception{
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        HttpServletResponse response = mock(HttpServletResponse.class);
        try{
            controller.exportCSV(response);
        } catch (java.lang.NullPointerException e){
            System.out.println("DID NOT WORK");
        }

        assertThat(outContent.toString(), containsString("DID NOT WORK"));
    }
    //Export CSV test with correct input
    @Test
    void exportCSVRight() throws Exception{
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        HttpServletResponse response = mock(HttpServletResponse.class);
        try{
            controller.exportCSV(response);
        } catch (java.lang.NullPointerException e){
            System.out.println("WORKED");
        }
        assertThat(outContent.toString(), containsString("WORKED"));
    }

    //Upload Tests
    //upload csv  with a .txt file test
    @Test
    void uploadFileText() throws IOException {
        //test text file
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        File textFile = new File("src/test/java/testFiles/textTest.txt");
        MultipartFile multipartFileText = buildMultipartFile(textFile,  "multipartFileText");
        controller.uploadFile(multipartFileText);
        assertThat(outContent.toString(), containsString("AN ERROR HAS OCCURRED"));

    }
    //upload csv with an empty csv file test
    @Test
    void uploadFileEmpty() throws IOException{
        //test empty csv file
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        File emptyCSV = new File("src/test/java/testFiles/emptyCSV.csv");
        MultipartFile multipartFileEmpty = buildMultipartFile(emptyCSV,  "multipartFileEmpty");
        controller.uploadFile(multipartFileEmpty);
        assertThat(outContent.toString(), containsString("AN ERROR HAS OCCURRED"));
    }
    //upload csv with a correct csv file test
    @Test
    void uploadFileCorrect() throws IOException{
        //test correct csv file
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        File correctCSV = new File("src/test/java/testFiles/correctCSV.csv");
        MultipartFile multipartFileCorrect = buildMultipartFile(correctCSV,  "multipartFileCorrect");
        controller.uploadFile(multipartFileCorrect);
        assertThat(outContent.toString(), containsString("AN ERROR HAS OCCURRED"));
    }
    //upload csv with an incorrect csv file test
    @Test
    void uploadFileIncorrect() throws IOException {
        //test incorrect csv file
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        File incorrectCSV = new File("src/test/java/testFiles/incorrectCSV.csv");
        MultipartFile multipartFileIncorrect = buildMultipartFile(incorrectCSV,  "multipartFileIncorrect");
        controller.uploadFile(multipartFileIncorrect);
        assertThat(outContent.toString(), containsString("AN ERROR HAS OCCURRED"));
    }

    

    //make multipart file
    public static MultipartFile buildMultipartFile(final File file,
                                                   final String multipartFileParameterName) throws IOException {
        MultipartFile multipartFile = null;

        try (final FileInputStream input = new FileInputStream(file)) {
            byte[] byteArray = new byte[input.available()];

            multipartFile = new MockMultipartFile(
                    multipartFileParameterName,
                    file.getName(),
                    Files.probeContentType(file.toPath()),
                    byteArray);
        }

        return multipartFile;
    }

}
