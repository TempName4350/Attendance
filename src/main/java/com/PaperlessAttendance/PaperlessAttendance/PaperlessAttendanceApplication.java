package com.PaperlessAttendance.PaperlessAttendance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.PaperlessAttendance.PaperlessAttendance.entities.Student;
import com.PaperlessAttendance.PaperlessAttendance.repositories.StudentRepository;
import com.PaperlessAttendance.PaperlessAttendance.entities.Teacher;
import com.PaperlessAttendance.PaperlessAttendance.repositories.TeacherRepository;
import java.util.stream.Stream;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PaperlessAttendanceApplication {
    public static void main(String[] args) {
        SpringApplication.run(PaperlessAttendanceApplication.class, args);
    }

    @Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/users").allowedOrigins("http://localhost:4200");
			}
		};
	}


	/*public static void main(String[] args) {
		SpringApplication.run(PaperlessAttendanceApplication.class, args);
	}

    @Bean
    CommandLineRunner init(UserRepository userRepository) {
        return args -> {
            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                User user = new User(name, name.toLowerCase() + "@domain.com");
                userRepository.save(user);
            });
            userRepository.findAll().forEach(System.out::println);
        };
    }*/
}