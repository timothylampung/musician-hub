import {
  Component
} from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { map } from 'rxjs/operators';
import { Customer } from '../../../model/customer.model';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.styles.scss']
})
export class DashboardPage {

  customers: Customer[];
  id: string;
  name :string;
  phoneNo : string;
  age : number;


  constructor(private crudService: CrudService) {
    this.getCustomersList();
  }

  addNewCustomer(): void {
    this.crudService.createCustomer({
      name: this.name,
      phoneNo : this.phoneNo,
      age: this.age

    });
  }

  getCustomersList(): void {
    this.crudService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }

  deleteCustomer(id :string): void{
    this.crudService.deleteCustomer(id);
  }
  deleteAll(): void{
    this.crudService.deleteAll();
  }

  updateCustomer(): void{
    this.crudService.updateCustomer(this.id, {
      name: this.name,
      phoneNo : this.phoneNo,
      age: this.age
    });
  }
}
