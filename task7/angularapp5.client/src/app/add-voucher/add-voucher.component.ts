import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {
  constructor(private _ser: MyserviceService) { }

  ngOnInit() { }

   
  addvoucher(data: any) {

    this._ser.postVouchers(data).subscribe(() => {
      alert("add new voucher");
    
    })

  }



}
