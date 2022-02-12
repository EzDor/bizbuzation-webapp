import { Component, OnInit } from '@angular/core';
import { SvgIcons } from "src/app/models/svg-icons";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public mainAppIcon = SvgIcons.MAIN_APP_ICON;

  constructor() { }

  ngOnInit(): void {
  }

}
