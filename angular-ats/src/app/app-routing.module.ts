import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';   // Import your LoginComponent
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'new-password',component:NewPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
