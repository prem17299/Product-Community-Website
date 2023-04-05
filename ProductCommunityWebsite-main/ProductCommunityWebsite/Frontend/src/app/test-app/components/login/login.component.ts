import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { ServicesService } from '../../services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  user = new User();
  
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  
  }

  loginUser(){
    localStorage.clear();
   const loginData =  {
      "userName": this.user.email,
      "password": this.user.password
    }
   
    this.service.generateToken(loginData).subscribe(
      (data: any)=>{
       

        // sessionStorage.setItem("userFlag","true");
        //login....
        this.service.loginUserToken(data.token);
        this.service.getCurrentUser().subscribe(
          (user:any)=>{
            this.service.setUser(user);
            
            
            //redirect.... ADMIN-> admin dashboard
            //NORMAL.... NORMAL -> normal dashboard
            if(this.service.getUserRole()=="ADMIN"){
              Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 10000
              })
              window.location.href='/admin/users';
            }else if(this.service.getUserRole()=="NORMAL"){
              Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 10000
              })
              window.location.href='/home';
            }else{
              this.service.logout();
              Swal.fire({
                icon: 'error',
                title: 'Login not Successful',
                showConfirmButton: true,
                timer: 2000
              })
            }
          }
          )

      },
      (error)=>{
        console.log("Error");
        this.msg = "Please Check Your Email | Password";
        Swal.fire({
          icon: 'error',
          title: this.msg,
          showConfirmButton: false,
          timer: 10000
        })
      }
    )
    
  }

}
