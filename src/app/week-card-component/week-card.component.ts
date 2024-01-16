import { Component } from '@angular/core';
import { FamilySchema } from '../Family.Schema';
import { familyData } from '../data.family';
import { weekDayData } from '../week-day-data';
import { WeekDaySchema } from '../WeekDay.Schema';

@Component({
  selector: 'app-week-card',
  templateUrl: './week-card.component.html',
  styleUrl: './week-card.component.css',
  styles: `
    
  `,
})
export class WeekCardComponent {
  weekDayData: WeekDaySchema[] = weekDayData;
  familyData: FamilySchema[] = familyData;

  constructor() {
    //console.log(familyData);
    console.log(weekDayData[0].day);
  }
}
