import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 submenu:boolean=false;
 minusIcon:boolean=false;
 plusIcon:boolean=true;
  constructor() {}

  ngOnInit() {
  }
  showSubMenus(){
    this.submenu=true;
    this.minusIcon=true;
    this.plusIcon=false;
  }
  hideSubMenus(){
    this.submenu=false;
    this.minusIcon=false;
    this.plusIcon=true;
  }
}
