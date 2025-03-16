import { Component } from '@angular/core';
import { MyserviceService } from '../Service/myservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private myservice: MyserviceService) { }


  ngOnInit() {
  }


  AddNewUser(data:any) {
    this.myservice.AddUser(data).subscribe(() => {
      alert("add new user");

    }

    )
  }



}

