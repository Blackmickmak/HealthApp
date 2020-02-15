import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: 'health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  gender = "1";
  unit = "1";
  weight = 0;
  age = 0;
  height = 0;

  heightChanhged(){
    
  }
}
