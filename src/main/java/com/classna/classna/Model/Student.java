package com.classna.classna.Model;


import java.security.SecureRandom;
import java.util.Base64;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(
    name = "students",
    uniqueConstraints = {
        @UniqueConstraint(name = "student_email_constraint", columnNames = "email"),
        @UniqueConstraint(name = "student_username_constraint", columnNames = "username")
    }
)
public class Student {
    @Id
    @SequenceGenerator(
        name = "student_sequence",
        sequenceName = "student_sequence",
        allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_sequence")
    @Column(
        name = "id",
        updatable = false
    )
    private Long id;
    
    @Column(
        name = "username",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String username;
    
    @Column(
        name = "password",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String password;
    
    @Column(
        name = "email",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String email;
    
    @Column(
        name = "first_Name",
        columnDefinition = "TEXT"
    )
    private String firstName;

    @Column(
        name = "last_Name",
        columnDefinition = "TEXT"
    )
    private String lastName;
    
    @Column(
        name = "token",
        columnDefinition = "TEXT"
    )
    private String token;

    public Student() {}

    public Student(String username, String password, String email, String firstName, String lastName) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = generateNewToken();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getToken(){
        return token;
    }



   public String generateNewToken() {

    SecureRandom secureRandom = new SecureRandom(); //threadsafe
    Base64.Encoder base64Encoder = Base64.getUrlEncoder(); //threadsafe
    byte[] randomBytes = new byte[24];
    secureRandom.nextBytes(randomBytes);
    return base64Encoder.encodeToString(randomBytes);
   
   }
    


    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Student other = (Student) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (username == null) {
            if (other.username != null)
                return false;
        } else if (!username.equals(other.username))
            return false;
        if (password == null) {
            if (other.password != null)
                return false;
        } else if (!password.equals(other.password))
            return false;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (firstName == null) {
            if (other.firstName != null)
                return false;
        } else if (!firstName.equals(other.firstName))
            return false;
        if (lastName == null) {
            if (other.lastName != null)
                return false;
        } else if (!lastName.equals(other.lastName))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email
                + ", firstName=" + firstName + ", lastName=" + lastName + ", token=" + token + "]";
    }

    
    

    
}
