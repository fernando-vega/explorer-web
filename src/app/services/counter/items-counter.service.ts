import { Injectable } from '@angular/core';
import { itemCounterInterface } from '../../models/items-counter.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsCounterService {

  items: itemCounterInterface[] = [
    {
      id: '0',
      img: '../../../../assets/images/icons/icon-ray.svg',
      num: 50,
      text: 'Años de experiencia'
    },
    {
      id: '1',
      img: '../../../../assets/images/icons/icon-customers.svg',
      num: 28,
      text: 'Clientes Satisfechos'
    },
    {
      id: '2',
      img: '../../../../assets/images/icons/icon-hand2.svg',
      num: 71,
      text: 'Transformadores reparados'
    },
    {
      id: '3',
      img: '../../../../assets/images/icons/icon-substation.svg',
      num: 18,
      text: 'Subestaciones instaladas'
    },
    {
      id: '4',
      img: '../../../../assets/images/icons/icon-warning-machine2.svg',
      num: 16,
      text: 'Transformadores alquilados'
    },
  ];

  getAllItems() {
    return this.items;
  }
}
