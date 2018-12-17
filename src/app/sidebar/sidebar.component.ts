import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'pe-7s-graph', class: '' },
    { path: '/possibleclient', title: 'Posible cliente',  icon: 'pe-7s-user', class: '' },
    { path: '/client', title: 'Cliente',  icon: 'pe-7s-user', class: '' },
    { path: '/contact', title: 'Contacto',  icon: 'pe-7s-user', class: '' },
    { path: '/opportunity', title: 'Oportunidades',  icon: 'pe-7s-science', class: '' },
    { path: '/quotation', title: 'Cotizacion',  icon: 'pe-7s-cash', class: '' },
    { path: '/associated', title: 'Asociados',  icon: 'pe-7s-users', class: '' },
    { path: '/list', title: 'Usuarios',  icon: 'pe-7s-users', class: '' },
    { path: '/login', title: 'Salir',  icon: 'pe-7s-close', class: 'active-pro' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
