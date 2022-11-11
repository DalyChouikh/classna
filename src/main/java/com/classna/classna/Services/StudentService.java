package com.classna.classna.Services;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

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
        Optional<Student> studentOptional2 = studentRepository.findStudentByEmail(student.getEmail());
        Optional<Student> studentOptional1 = studentRepository.findStudentByUsername(student.getUsername());
        if(studentOptional1.isPresent() || studentOptional2.isPresent()) {
            throw new IllegalStateException("Student already exists with that Email and Username!");
        }
        studentRepository.save(student);
    }
    
    @Transactional
    public void deleteStudent(String username){
        Student  student = studentRepository.findStudentByUsername(username).orElseThrow(() -> new IllegalStateException("Student doesn't exist"));
        studentRepository.deleteById(student.getId());
    }
    
    @Transactional
    public void updateStudent(Student student){
        Student studentToUpdate = studentRepository.findStudentByUsername(student.getUsername()).orElseThrow(() -> new IllegalStateException("Student doesn't exist"));
        if(student.getUsername() != null && student.getUsername().length() > 0 && !Objects.equals(student.getUsername(),studentToUpdate.getUsername())){
            studentToUpdate.setUsername(student.getUsername());
        }
        
        if(student.getEmail() != null && student.getEmail().length() > 0 && !Objects.equals(student.getEmail(),studentToUpdate.getEmail())){
            studentToUpdate.setEmail(student.getEmail());
        }

        if(student.getPassword() != null && student.getPassword().length() > 0 && !Objects.equals(student.getPassword(),studentToUpdate.getPassword())){
            
            studentToUpdate.setPassword(student.getPassword());
        }
        
        if(student.getFirstName() != null && student.getFirstName().length() > 0 && !Objects.equals(student.getFirstName(),studentToUpdate.getFirstName())){
            
            studentToUpdate.setFirstName(student.getFirstName());
        }
        
        if(student.getLastName() != null && student.getLastName().length() > 0 && student.getLastName().length() > 0 && !Objects.equals(student.getLastName(),studentToUpdate.getLastName())){
            studentToUpdate.setLastName(student.getLastName());
        }
        
    }


    


    

}
