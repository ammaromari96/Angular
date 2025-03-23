import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editvoucher',
  templateUrl: './editvoucher.component.html',
  styleUrl: './editvoucher.component.css'
})
export class EditvoucherComponent {

  constructor(private _ser: MyserviceService, private _active: ActivatedRoute) { }


  ngOnInit() { }


  editvoucher(data: any) {
    let id = this._active.snapshot.paramMap.get("id");
    this._ser.editVouchers(data, id).subscribe(() => {
      alert("edit voucher");
    })

  }



}
