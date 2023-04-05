import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchQuery: any;
  products: any;
  stats: any
  constructor(private service: ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.showStats();
  }

  showStats(){
    this.service.showStats().subscribe(
      (data)=>{
        console.warn(data);
        this.stats = data;
                  
      }
    )
  }

  addReview(pId: any){
    Swal.fire({
      iconHtml: '<img src="https://i.stack.imgur.com/hzk6C.gif">',
      title: 'Redirecting......',
      text: "Hang tight we're redirecting you to add reviews page.",
      showConfirmButton: false,
      timer: 2500,
      background: 'black'
    })

    setTimeout(() => {
      localStorage.setItem("reviewProductId",pId);
      this.router.navigate(['addReview']);
    },3000)
    
  }
  showReview(pId: any){
    Swal.fire({
      iconHtml: '<img src="https://i.stack.imgur.com/hzk6C.gif">',
      title: 'Redirecting......',
      text: "Hang tight we're redirecting you to reviews page.",
      showConfirmButton: false,
      timer: 2500,
      background: 'black'
    })
    setTimeout(() => {
      localStorage.setItem("reviewProductId",pId);
    this.router.navigate(['showReview']);
    },3000)
    
  }
  

  loggedIn(){
    return this.service.isLogIn();
  }

  logout(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Action Completed',
          'Successfully logged out.'
        )
        this.service.logout();
    this.router.navigate(['login']);
      }
    })
    
  }

  currentUser(){
    return this.service.getUser();
  }

  removeFilter(){
    localStorage.removeItem("products");
  }

  searchedProducts(){
   const p = localStorage.getItem("products");
   if(p!=null)
      return JSON.parse(p);
   return [];
  }

  OnInput(event: any) {
    this.searchQuery = event.target.value;
    console.warn("PEA "+this.searchQuery);
    
    this.service.searchProducts(this.searchQuery).subscribe(

      data => {this.products = data
        this.service.sProducts(this.products);
        window.scrollTo(0,8000);
      },
      err => {
        console.log(err)
      }
    )
    }   


}


