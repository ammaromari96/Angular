import { Component } from '@angular/core';
import { MyserviceService } from '../Service/myservice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {


  constructor(private myservice: MyserviceService) { }

  ngOnInit() { }

  userdata: any 
  getUser(enteredUser : any) {
    this.myservice.getAllUsers().subscribe((data:any) => {
     let user= this.userdata = data.find((user: any) => user.Email == enteredUser.Email && user.password == enteredUser.password);

      if (user) {
        alert("Welcome ")
      } else {
        alert("Invalid Email or Password")
      }

    })
  }

}
