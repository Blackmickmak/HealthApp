import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }
  ToggleGender(){

  }

  ToggleImperial(){}
  gender = "1";
  unit = "1";
  weight = 0;
  age = 0;
  height = 175;
  Bmr:number;
  bmi:number = 0;
    //TargetHeartRate Thr { get; }
    KilogramsToPounds(kilograms:number){

    }
    PoundsToKilograms(pounds:number){

    }
    InchesToCentimeters(inches:number){

    }
    CentimetersToInches(centimeters:number){

    }

    InchesToFeetDisplay(inches:number){
      let heightInches = inches;
      let sb 
      let ft = Math.floor(heightInches / 12);
      if (ft > 0)
      {
         sb = parseInt(ft.toString()).toString() + " ft.";
      }
      heightInches -= (ft * 12);
      if (heightInches >= 1)
      {
          sb = sb + Math.floor(heightInches).toString() + " in.";
      }
      return sb.ToString();
    }

  getBmi()
  {
        this.bmi = this.weight  / Math.pow(this.height,2);
        this.bmi = (this.bmi * 10000);
        this.bmi = Math.round(this.bmi);
        return this.bmi;
  }

   getBmiTag()
    {

            if (this.bmi >= 30.0)
            {
                return "Obese";
            }

            if (this.bmi >= 25.0)
            {
                return "Overweight";
            }

            if (this.bmi < 18.5)
            {
                return "Underweight";
            }

            return "Normal";
        }
}
