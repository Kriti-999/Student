# Student
In this crud application I use react for frontend and node js for backend.
The database used is sql.
After getting the whole folder in you pc.
First open code in vs code and follow given steps-
## For running frontend go to folder and in the terminal and type 
* cd student_front
* Run app.js in terminal.
* Write npm i to download/install all node modules.
* Then write npm start.
## After that setup sql database in your mysql terminal after logging write following command
* create database student;
* use student;
* CREATE TABLE  Student_Detail(
    id int NOT NULL AUTO_INCREMENT,
    student varchar(255),
    rollNumber varchar(255),
    checkIn varchar(255),
    checkOut varchar(255),
    PRIMARY KEY(id)
);
## For running backend go to folder and in the terminal and type 
* cd student_back
* In db.js write the password of your mysql databse in place of pwd and in database name write name of your database ie student
* Write npm i to download all node modules.
* Then write node db.js
### Now your environment is setup 
