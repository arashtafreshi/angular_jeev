import { Component, OnInit } from '@angular/core';
import {InstagramConnectorService} from '../instagram-connector.service';

@Component({
  selector: 'app-home-main-top',
  templateUrl: './home-main-top.component.html',
  styleUrls: ['./home-main-top.component.css'],
  providers:[InstagramConnectorService]
})
export class HomeMainTopComponent implements OnInit {
  
  constructor(private instagramConnectorService:InstagramConnectorService) { }

  ngOnInit() {
    //this.instagramConnectorService.getUserInfo().then(res=>console.log(res));
  }

}
