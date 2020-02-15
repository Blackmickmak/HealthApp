import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-health',
  templateUrl: 'health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  bmi: number;
  bmiTag: string;

  constructor(private appSRV: AppService) { }

  ngOnInit() {
  }

  heightChanhged(){
    
  }

  getBmi(){
    if (this.appSRV.weight > 0) {
      this.bmi = this.appSRV.getBmi();
      this.bmiTag = this.appSRV.getBmiTag();
    }else{
      alert("Please enter weight and height")
    }
    
  }
}
