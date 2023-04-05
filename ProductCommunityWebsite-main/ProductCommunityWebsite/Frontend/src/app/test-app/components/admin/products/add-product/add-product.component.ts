import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/test-app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(form : any){
    let newPost = {
      productName: form.value.productName,
      brand: form.value.brand,
      productCode: form.value.productCode,
      id: this.service.getUser().id
    }
    
    
    this.service.addProduct(newPost).subscribe(
      (data)=>{ 
        Swal.fire({
          icon: 'success',
          title: 'Product Added Successful',
          showConfirmButton: true,
          timer: 5000
        })
        this.router.navigate(['admin/products']);
      },
      (err)=>{console.log(err)}
    )
  }

}
