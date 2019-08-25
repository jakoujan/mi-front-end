import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { ICustomer } from 'src/app/entity/customer';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  customer: ICustomer;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.session().then(response => {
      this.customer = response.fields.customer;
      console.log(this.customer);

    });
  }

}
