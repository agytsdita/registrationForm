import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UsersService } from './users.service';
import { Users } from './users';

@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit { 

   statusCode: number;
   requestProcessing = false;
   processValidation = false;
   //Create form
   usersForm = new FormGroup({
       mobileNo: new FormControl('', Validators.required),
	   firstName: new FormControl('', Validators.required),
	   lastName: new FormControl('', Validators.required),
	   dob: new FormControl('', Validators.required),
		gender: new FormControl('', Validators.required),
       email: new FormControl('', Validators.required)		   
   });
   //Create constructor to get service instance
   constructor(private usersService: UsersService) {
   }
   //Create ngOnInit() and and load user
   ngOnInit(): void {
   }   

   //Handle create and update user
   onUsersFormSubmit() {
	  this.processValidation = true;   
	  if (this.usersForm.invalid) {
	       return; //Validation failed, exit from method.
	  }   
	  //Form is valid, now perform create or update
      this.preProcessConfigurations();
	  let mobileNo = this.usersForm.get('mobileNo').value.trim();	
	   let firstName = this.usersForm.get('firstName').value.trim();
	  let lastName = this.usersForm.get('lastName').value.trim();	
	   let dob = this.usersForm.get('dob').value.trim();
	  let gender = this.usersForm.get('gender').value.trim();	
	  let email = this.usersForm.get('email').value.trim();  
	    //Handle create user
	    let users= new Users(mobileNo, firstName,lastName,dob,gender,email);	  
	    this.usersService.createUsers(users)
	      .subscribe(successCode => {
		            this.statusCode = successCode;
			    },
		        errorCode => this.statusCode = errorCode);
   }
  

   //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
	  this.requestProcessing = true;   
   }
}
    