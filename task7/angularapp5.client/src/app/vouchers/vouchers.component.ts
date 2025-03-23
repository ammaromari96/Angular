import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrl: './vouchers.component.css'
})
export class VouchersComponent {

  constructor(private _ser: MyserviceService) { }


  ngOnInit() {
    this.getallvouchers();
  }


  voucherdata: any

  getallvouchers() {
    this._ser.getVouchers().subscribe((data) => {
      this.voucherdata = data;



    })



  }
}
