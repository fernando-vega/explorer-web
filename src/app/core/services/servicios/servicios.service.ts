import { Injectable } from '@angular/core';
import { ServiciosInterface } from '../../models/servicios.interface';
import { NormalizedUrlService } from '../normalizedUrl/normalized-url.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private normalizedUrl: NormalizedUrlService) {}

  servicios: ServiciosInterface[] = [
    {
      id: '1',
      title: 'Alquiler atención de contingencias',
      img: '../../../../assets/images/services/servicio-1.png',
      bannerImg: '../../../../assets/images/parallax/historia-2.png',
      icon: '../../../../assets/images/icons/icon-warning-machine-white.svg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus at, aliquid amet similique numquam dolores ducimus itaque debitis ea assumenda praesentium magnam corrupti blanditiis tempore sint aliquam officiis. Dolores. Sint numquam cumque temporibus non distinctio obcaecati ab quae est minus? Provident sint, error sed sunt dolorem neque beatae ipsam molestias assumenda dolores qui? Impedit voluptatum inventore ratione animi ipsa! Molestias nemo at pariatur accusantium quis ipsam atque illo tempore quos porro dolor officiis reiciendis deleniti iusto ut, beatae eius totam autem? Eius esse mollitia cum. Dolorem, alias. Consequatur, quaerat. Temporibus libero maiores sint quia. Modi ipsam, unde provident dolorem quo, non repudiandae placeat facilis neque nobis nisi! Magni nesciunt nostrum modi ex exercitationem reiciendis amet deleniti quisquam molestiae et! Error consequatur ipsum at, ratione excepturi ex?',
    },
    {
      id: '2',
      title: 'Reparación y mantenimiento',
      img: '../../../../assets/images/services/servicio-2.png',
      bannerImg: '../../../../assets/images/parallax/banner-reparacion-1.png',
      icon: '../../../../assets/images/icons/icon-hand-white.svg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus at, aliquid amet similique numquam dolores ducimus itaque debitis ea assumenda praesentium magnam corrupti blanditiis tempore sint aliquam officiis. Dolores. Sint numquam cumque temporibus non distinctio obcaecati ab quae est minus? Provident sint, error sed sunt dolorem neque beatae ipsam molestias assumenda dolores qui? Impedit voluptatum inventore ratione animi ipsa! Molestias nemo at pariatur accusantium quis ipsam atque illo tempore quos porro dolor officiis reiciendis deleniti iusto ut, beatae eius totam autem? Eius esse mollitia cum. Dolorem, alias. Consequatur, quaerat. Temporibus libero maiores sint quia. Modi ipsam, unde provident dolorem quo, non repudiandae placeat facilis neque nobis nisi! Magni nesciunt nostrum modi ex exercitationem reiciendis amet deleniti quisquam molestiae et! Error consequatur ipsum at, ratione excepturi ex?',
      category: 'categoria 2'
    },
    {
      id: '3',
      title: 'Servicio técnico en campo',
      img: '../../../../assets/images/services/servicio-3.png',
      bannerImg: '../../../../assets/images/parallax/historia-2.png',
      icon: '../../../../assets/images/icons/icon-location-servic-white.svg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus at, aliquid amet similique numquam dolores ducimus itaque debitis ea assumenda praesentium magnam corrupti blanditiis tempore sint aliquam officiis. Dolores. Sint numquam cumque temporibus non distinctio obcaecati ab quae est minus? Provident sint, error sed sunt dolorem neque beatae ipsam molestias assumenda dolores qui? Impedit voluptatum inventore ratione animi ipsa! Molestias nemo at pariatur accusantium quis ipsam atque illo tempore quos porro dolor officiis reiciendis deleniti iusto ut, beatae eius totam autem? Eius esse mollitia cum. Dolorem, alias. Consequatur, quaerat. Temporibus libero maiores sint quia. Modi ipsam, unde provident dolorem quo, non repudiandae placeat facilis neque nobis nisi! Magni nesciunt nostrum modi ex exercitationem reiciendis amet deleniti quisquam molestiae et! Error consequatur ipsum at, ratione excepturi ex?',
      category: 'categoria 1'
    },
    {
      id: '4',
      title: 'Asesoría para adquisición de equipos',
      img: '../../../../assets/images/services/servicio-4.png',
      bannerImg: '../../../../assets/images/parallax/historia-2.png',
      icon: '../../../../assets/images/icons/icon-gear-white.svg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus at, aliquid amet similique numquam dolores ducimus itaque debitis ea assumenda praesentium magnam corrupti blanditiis tempore sint aliquam officiis. Dolores. Sint numquam cumque temporibus non distinctio obcaecati ab quae est minus? Provident sint, error sed sunt dolorem neque beatae ipsam molestias assumenda dolores qui? Impedit voluptatum inventore ratione animi ipsa! Molestias nemo at pariatur accusantium quis ipsam atque illo tempore quos porro dolor officiis reiciendis deleniti iusto ut, beatae eius totam autem? Eius esse mollitia cum. Dolorem, alias. Consequatur, quaerat. Temporibus libero maiores sint quia. Modi ipsam, unde provident dolorem quo, non repudiandae placeat facilis neque nobis nisi! Magni nesciunt nostrum modi ex exercitationem reiciendis amet deleniti quisquam molestiae et! Error consequatur ipsum at, ratione excepturi ex?',
      category: 'categoria 2'
    },
    {
      id: '5',
      title: 'Motores',
      img: '../../../../assets/images/services/servicio-5.png',
      bannerImg: '../../../../assets/images/parallax/historia-2.png',
      icon: '../../../../assets/images/icons/icon-motor-white.svg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus at, aliquid amet similique numquam dolores ducimus itaque debitis ea assumenda praesentium magnam corrupti blanditiis tempore sint aliquam officiis. Dolores. Sint numquam cumque temporibus non distinctio obcaecati ab quae est minus? Provident sint, error sed sunt dolorem neque beatae ipsam molestias assumenda dolores qui? Impedit voluptatum inventore ratione animi ipsa! Molestias nemo at pariatur accusantium quis ipsam atque illo tempore quos porro dolor officiis reiciendis deleniti iusto ut, beatae eius totam autem? Eius esse mollitia cum. Dolorem, alias. Consequatur, quaerat. Temporibus libero maiores sint quia. Modi ipsam, unde provident dolorem quo, non repudiandae placeat facilis neque nobis nisi! Magni nesciunt nostrum modi ex exercitationem reiciendis amet deleniti quisquam molestiae et! Error consequatur ipsum at, ratione excepturi ex?',
      category: 'categoria 1'
    },
    {
      id: '6',
      title: 'Capacitaciones',
      img: '../../../../assets/images/services/servicio-6.png',
      bannerImg: '../../../../assets/images/parallax/historia-2.png',
      icon: '../../../../assets/images/icons/icon-training-white.svg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis minus at, aliquid amet similique numquam dolores ducimus itaque debitis ea assumenda praesentium magnam corrupti blanditiis tempore sint aliquam officiis. Dolores. Sint numquam cumque temporibus non distinctio obcaecati ab quae est minus? Provident sint, error sed sunt dolorem neque beatae ipsam molestias assumenda dolores qui? Impedit voluptatum inventore ratione animi ipsa! Molestias nemo at pariatur accusantium quis ipsam atque illo tempore quos porro dolor officiis reiciendis deleniti iusto ut, beatae eius totam autem? Eius esse mollitia cum. Dolorem, alias. Consequatur, quaerat. Temporibus libero maiores sint quia. Modi ipsam, unde provident dolorem quo, non repudiandae placeat facilis neque nobis nisi! Magni nesciunt nostrum modi ex exercitationem reiciendis amet deleniti quisquam molestiae et! Error consequatur ipsum at, ratione excepturi ex?',
      category: 'categoria 1'
    },
  ];

  getAllServicios() {
    return this.servicios;
  }

  getServicio(title: string) {
    return this.servicios.find(item => title === this.normalizedUrl.normalizedUrl(item.title));
  }

}
