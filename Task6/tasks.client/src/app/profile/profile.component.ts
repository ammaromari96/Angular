import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private _ser: MyServiceService) { }


  logedUser: any;

  Popup= false;

  ngOnInit() {
    let Entereduser = sessionStorage.getItem('loggeduser');
    if (Entereduser) {
      this.logedUser = JSON.parse(Entereduser)
    }
 
  }
  openEditProfile() {
    this.Popup = true;
  }
  updateUser(data: any) {
    this.logedUser.Email = data.Email
    this.logedUser.password = data.password
    sessionStorage.setItem('loggeduser', JSON.stringify(this.logedUser))
    this.Popup = false
    this._ser.updateUser(this.logedUser.id,this.logedUser).subscribe(() => { })

  }


}
