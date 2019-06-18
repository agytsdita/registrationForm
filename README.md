# registrationForm
Spring Boot 2, Maven, JPA, Hibernate, Mysql, Angular 2
Pre requisite
Create Mysql database
- database name : users
--Table name : users 
--- list of column :
1 user_id int(50) Not Null AUTO_INCREMENT
2 mobile_no varchar(20) Not Null
3 first_nm varchar(200) Not Null
4 last_nm varchar(200) Not Null
5 dob date Yes NULLABLE
6 gender varchar(1) Yes NULLABLE
7 email varchar(100) Not Null

bring up client and server :
1. Go to the root folder of the project using command prompt and run the command.
>> mvn spring-boot:run 
2. Run "ng serve" command on app/ and Angular application is ready on the following URL >> http://localhost:4200
