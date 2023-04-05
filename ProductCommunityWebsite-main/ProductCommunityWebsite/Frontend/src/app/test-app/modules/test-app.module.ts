import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAppRoutingModule } from './test-app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from '../components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { authInterceptorProviders } from '../interceptors/auth.interceptor';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { ShowReviewsComponent } from '../components/show-reviews/show-reviews.component';
import { AddReviewsComponent } from '../components/add-reviews/add-reviews.component';
import { SidebarComponent } from '../components/admin/sidebar/sidebar.component';
import { UsersComponent } from '../components/admin/users/users.component';
import { ProductsComponent } from '../components/admin/products/products.component';
import { ReviewsComponent } from '../components/admin/reviews/reviews.component';
import { AddProductComponent } from '../components/admin/products/add-product/add-product.component';
import { RequestReviewComponent } from '../components/request-review/request-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ShowReviewsComponent,
    AddReviewsComponent,
    SidebarComponent,
    UsersComponent,
    ProductsComponent,
    ReviewsComponent,
    AddProductComponent,
    RequestReviewComponent,
  
   
  ],
  imports: [
    CommonModule,
    TestAppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    
    NgbModule

      
  ],
  providers: [authInterceptorProviders]
})
export class TestAppModule { }
