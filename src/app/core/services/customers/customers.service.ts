import { Injectable } from '@angular/core';
import { CustomersInterface } from '../../models/customers.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {


  customers: CustomersInterface[] = [
    {
      id: '1',
      name: 'Argos',
      image: '../../../../assets/images/customers/logo-argos.png'
    },
    {
      id: '2',
      name: 'EPM',
      image: '../../../../assets/images/customers/logo-epm.png'
    },
    {
      id: '3',
      name: 'Holcim',
      image: '../../../../assets/images/customers/logo-holcim.svg'
    },
    {
      id: '4',
      name: 'Indumil',
      image: '../../../../assets/images/customers/logo-indumil.jpg'
    },
    {
      id: '5',
      name: 'Paz de Rio',
      image: '../../../../assets/images/customers/logo-pazderio.jpg'
    },
    {
      id: '6',
      name: 'Codensa',
      image: '../../../../assets/images/customers/logo-codensa.png'
    },
    {
      id: '7',
      name: 'ESSA',
      image: '../../../../assets/images/customers/logo-essa.png'
    },
    {
      id: '8',
      name: 'Cedenar',
      image: '../../../../assets/images/customers/logo-cedenar.png'
    },
    {
      id: '9',
      name: 'GENSA',
      image: '../../../../assets/images/customers/logo-gensa.jpg'
    },
    {
      id: '10',
      name: 'chec',
      image: '../../../../assets/images/customers/logo-chec.png'
    },
    {
      id: '11',
      name: 'CEPM',
      image: '../../../../assets/images/customers/logo-cepm.png'
    },
    {
      id: '12',
      name: 'EBSA',
      image: '../../../../assets/images/customers/logo-ebsa.png'
    },
  ];

  getAllCustomers() {
    return this.customers;
  }

  getCustomer(id: string) {
    return this.customers.find(item => id === item.id);
  }

}
