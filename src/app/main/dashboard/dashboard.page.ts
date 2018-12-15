import {
  Component
} from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { map } from 'rxjs/operators';
import { Customer } from '../../../model/customer.model';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {

  customers: Customer[];
  id: string;
  name :string;
  phoneNo : string;
  age : number;


  constructor(private crudService: CrudService) {
  }

  addNewCustomer(): void {
    this.crudService.createCustomer({
      name: this.name,
      phoneNo : this.phoneNo,
      age: this.age
    });
  }

  getCustomersList(): void {
    this.crudService.getCustomersList().snapshotChanges().pipe(map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }

  deleteCustomer() {
    this.crudService.deleteCustomer(this.id);
  }
  deleteAll(){
    this.crudService.deleteAll();
  }

  updateCustomer(){
    this.crudService.updateCustomer(this.id, {
      name: this.name,
      phoneNo : this.phoneNo,
      age: this.age
    });
  }
}
