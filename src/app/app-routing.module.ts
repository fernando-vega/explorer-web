import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
        data: {title: 'Explorer | Inicio'}
      },
      {
        path: 'inicio',
        data: {title: 'Explorer | Inicio'},
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'blog',
        data: {title: 'Explorer | Blog'},
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'quienes-somos',
        data: {title: 'Explorer | Nosotros'},
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'certificaciones',
        data: {title: 'Explorer | Certificaciones'},
        loadChildren: () => import('./about/certifications.module').then(m => m.CertificationsModule)
      },
      {
        path: 'historia',
        data: {title: 'Explorer | Historia'},
        loadChildren: () => import('./about/history.module').then(m => m.HistoryModule)
      },
      {
        path: 'plan-estrategico',
        data: {title: 'Explorer | Plan Estratégico'},
        loadChildren: () => import('./about/institutional.module').then(m => m.InstitutionalModule)
      },
      {
        path: 'blog',
        data: {title: 'Explorer | Servicios'},
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'servicios',
        data: {title: 'Explorer | Servicios'},
        loadChildren: () => import('./servicios/servicios.module').then(m => m.ServiciosModule)
      },
      {
        path: 'alquiler',
        data: {title: 'Explorer | Alquiler'},
        loadChildren: () => import('./alquiler/alquiler.module').then(m => m.AlquilerModule)
      },
      {
        path: 'eventos',
        data: {title: 'Explorer | Eventos'},
        loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosModule)
      },
      {
        path: 'clientes',
        data: {title: 'Explorer | Clientes'},
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'contacto',
        data: {title: 'Explorer | Contacto'},
        loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
