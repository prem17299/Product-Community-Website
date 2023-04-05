import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewsComponent } from '../components/add-reviews/add-reviews.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { AddProductComponent } from '../components/admin/products/add-product/add-product.component';
import { ProductsComponent } from '../components/admin/products/products.component';
import { ReviewsComponent } from '../components/admin/reviews/reviews.component';
import { UsersComponent } from '../components/admin/users/users.component';
import { AdminGuard } from '../guards/admin.guard';
import { NormalGuard } from '../guards/normal.guard';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { RequestReviewComponent } from '../components/request-review/request-review.component';
import { ShowReviewsComponent } from '../components/show-reviews/show-reviews.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'requestReview',
    component: RequestReviewComponent
  },
  {
    path:'admin',
    canActivate:[AdminGuard],
    component: DashboardComponent,
    children:[
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      },
      {
        path: 'addProduct',
        component: AddProductComponent
      }
    ]
    
  },
  {
    path: 'addReview',
    canActivate: [NormalGuard],
    component: AddReviewsComponent
  },
  {
    path: 'showReview',
    canActivate: [NormalGuard],
    component: ShowReviewsComponent
  },
  
  {
    path: '**',
    component: HomeComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAppRoutingModule { }
