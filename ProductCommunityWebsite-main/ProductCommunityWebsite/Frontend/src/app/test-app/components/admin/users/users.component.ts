import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/test-app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private service: ServicesService,private router: Router) { }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers(){
    this.service.showUsers().subscribe(
      (data)=> {
        
        this.users = data},
      (err)=> console.log(err)
      )
  }

  userChange(user: any){
    const userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      enabled: user.enabled,
      email: user.email,
      password: user.password
    }
    
    this.service.userStatus(userData).subscribe(
      (data)=> {
        Swal.fire({
          icon: 'success',
          title: 'User Status Updated',
          showConfirmButton: true,
          timer: 2000
        })
        setTimeout(()=>{
          window.location.href = "admin/users"
        },1000)
       
      },
      (err)=> console.log(err)
      
    )
  }

}
