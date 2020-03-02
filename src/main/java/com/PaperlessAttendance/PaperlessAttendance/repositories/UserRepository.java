package com.PaperlessAttendance.PaperlessAttendance.repositories;

import com.PaperlessAttendance.PaperlessAttendance.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{}