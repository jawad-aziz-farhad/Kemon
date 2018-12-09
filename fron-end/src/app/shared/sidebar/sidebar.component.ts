import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    hide: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' , hide : false},
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '', hide : true },
    { path: '/teachers', title: 'Teachers',  icon:'person', class: '' , hide : false},
    { path: '/students', title: 'Students',  icon:'person', class: '', hide : false },
    { path: '/courses', title: 'Courses',  icon:'book', class: '' , hide : false},
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '', hide : false },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' , hide : false},    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() { this.menuItems = ROUTES.filter(menuItem => menuItem); }

  isMobileMenu() { return $(window).width() > 991 ? false : true; };
}
