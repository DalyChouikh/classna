package com.classna.classna.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.classna.classna.Model.Student;
import com.classna.classna.Repositories.StudentRepository;

@Service
public class StudentService {
    
    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents() {

        return studentRepository.findAll();
    }

    public Student getStudent(String username){
        return studentRepository.findStudentByUsername(username).orElseThrow(() -> new IllegalStateException("Student doesn't exist"));
    }

    public void addStudent(Student student) {
        Optional<Student> studentOptional1 = studentRepository.findStudentByUsername(student.getUsername());
        Optional<Student> studentOptional2 = studentRepository.findStudentByEmail(student.getEmail());
        if(studentOptional1.isPresent() || studentOptional2.isPresent()) {
            throw new IllegalStateException("Student already exists with that Email and Username!");
        }
        studentRepository.save(student);
    }


    


    

}
