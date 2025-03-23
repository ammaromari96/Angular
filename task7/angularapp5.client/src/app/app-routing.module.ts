import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VouchersComponent } from './vouchers/vouchers.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { EditvoucherComponent } from './editvoucher/editvoucher.component';

const routes: Routes = [
  { path: "Vouchers", component: VouchersComponent },
  { path: "addVoucher", component: AddVoucherComponent },
  { path: "EditVoucher/:id", component: EditvoucherComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
