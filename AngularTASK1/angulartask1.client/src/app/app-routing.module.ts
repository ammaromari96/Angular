import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { DetailesComponent } from './detailes/detailes.component';

const routes: Routes = [

  { path: "aregister", component: RegisterComponent },
  { path: "aLogin", component: LoginComponent },
  { path: "aproduct", component: ProductComponent },
  { path: "adetailes", component: DetailesComponent } 






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
