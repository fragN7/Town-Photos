import {Component, OnInit} from '@angular/core';
import {Photo} from "../photo";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit{
  photos: Photo[] = [];

  ngOnInit() {

  }
}
