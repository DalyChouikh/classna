package com.classna.classna.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.classna.classna.Model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    
    Optional<Student> findStudentByUsername(String username);
    Optional<Student> findStudentByEmail(String email);
    Optional<Student> findById(Long id);

    

}
