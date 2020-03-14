import { Injectable } from '@angular/core';
import { ProductsInterface } from '../../models/products.interface';
import { NormalizedUrlService } from '../normalizedUrl/normalized-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductsInterface[] = [
    {
      id: '1',
      title: 'Transformador estandar',
      img: '../../../../assets/images/products/transformador.png',
      mainIcon: '../../../../assets/images/icons/icon-transformador.svg',
      features: 'Potencia 70 MVA',
      type: 'OLTC',
      icons: [
        {
          id: '1',
          icon: '../../../../assets/images/icons/icon-warning-machine3.svg',
          text: '70 MVA'
        },
        {
          id: '2',
          icon: '../../../../assets/images/icons/icon-meter.svg',
          text: 'XXXX'
        },
        {
          id: '3',
          icon: '../../../../assets/images/icons/icon-ray-yellow.svg',
          text: 'Voltaje'
        },
        {
          id: '4',
          icon: '../../../../assets/images/icons/icon-olct.svg',
          text: 'OLTC'
        }
      ],
      description: 'Esta es la descripción',
      category: 'Cambiador',
      subCategory: 'Sin Carga',
      available: true,
      urlFicha: 'https://fichatecnica.pdf'
    },
    {
      id: '2',
      title: 'Transformador Regular',
      img: '../../../../assets/images/products/transformador.png',
      mainIcon: '../../../../assets/images/icons/icon-transformador.svg',
      features: 'Potencia 70 MVA',
      type: 'OLTC',
      icons: [
        {
          id: '1',
          icon: '../../../../assets/images/icons/icon-warning-machine3.svg',
          text: '70 MVA'
        },
        {
          id: '2',
          icon: '../../../../assets/images/icons/icon-meter.svg',
          text: 'XXXX'
        },
        {
          id: '3',
          icon: '../../../../assets/images/icons/icon-ray-yellow.svg',
          text: 'Voltaje'
        },
        {
          id: '4',
          icon: '../../../../assets/images/icons/icon-olct.svg',
          text: 'OLTC'
        }
      ],
      description: 'Esta es la descripción dos',
      category: 'Cambiador',
      subCategory: 'Sin Carga',
      available: false,
      urlFicha: 'https://fichatecnica.pdf'
    },
    {
      id: '3',
      title: 'Transformador Master',
      img: '../../../../assets/images/products/transformador.png',
      mainIcon: '../../../../assets/images/icons/icon-transformador.svg',
      features: 'Potencia 70 MVA',
      type: 'OLTC',
      icons: [
        {
          id: '1',
          icon: '../../../../assets/images/icons/icon-warning-machine3.svg',
          text: '70 MVA'
        },
        {
          id: '2',
          icon: '../../../../assets/images/icons/icon-meter.svg',
          text: 'XXXX'
        },
        {
          id: '3',
          icon: '../../../../assets/images/icons/icon-ray-yellow.svg',
          text: 'Voltaje'
        },
        {
          id: '4',
          icon: '../../../../assets/images/icons/icon-olct.svg',
          text: 'OLTC'
        }
      ],
      description: 'Esta es la descripción',
      category: 'Cambiador',
      subCategory: 'Sin Carga',
      available: false,
      urlFicha: 'https://fichatecnica.pdf'
    }
  ];

  constructor(private normalizedUrl: NormalizedUrlService) {}

  getAllProducts() {
    return this.products;
  }

  getProduct(title: string) {
    return this.products.find(item => title === this.normalizedUrl.normalizedUrl(item.title));
  }

}
