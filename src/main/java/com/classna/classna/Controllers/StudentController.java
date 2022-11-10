package com.classna.classna.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.classna.classna.Model.Student;
import com.classna.classna.Response.ResponseHandler;
import com.classna.classna.Services.StudentService;

@RestController
@RequestMapping("api/v1/students")
public class StudentController {
    private final StudentService studentService;


    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }


    @GetMapping
    public ResponseEntity<Object> getStudents(){
        try{
            return ResponseHandler.generateResponse("Successfully retrieved students", HttpStatus.OK, studentService.getStudents());
        }
        catch(Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.MULTI_STATUS,null);
        }


    }

    @GetMapping(value = "{username}")
    public ResponseEntity<Object> getStudent(@PathVariable String username){
        try{
            return ResponseHandler.generateResponse("Successfully retrieved student", HttpStatus.OK, studentService.getStudent(username));
        }
        catch(Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.NOT_FOUND,null);
        }
    }

    @PostMapping
    public ResponseEntity<Object> addStudent(@RequestBody Student student){
        try{
            studentService.addStudent(student);
            return ResponseHandler.generateResponse("Student added successfully", HttpStatus.OK, student);
        }
        catch(Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST,null);
        }
    }
    
    @DeleteMapping(value = "delete/{username}")
    public ResponseEntity<Object> deleteStudent(@PathVariable String username){
        try{
            studentService.deleteStudent(username);
            return ResponseHandler.generateResponse("Successfully deleted student", HttpStatus.OK, studentService.getStudents() );
        }
        catch(Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.NOT_FOUND,null);
        }
    }
    


}
