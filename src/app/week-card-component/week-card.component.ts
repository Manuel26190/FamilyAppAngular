import { Component } from '@angular/core';
import { FamilySchema } from '../Family.Schema';
import { familyData } from '../data.family';
import { weekDayData } from '../week-day-data';
import { WeekDaySchema } from '../WeekDay.Schema';

@Component({
  selector: 'app-week-card',
  templateUrl: './week-card.component.html',
  styleUrl: './week-card.component.css',
})
export class WeekCardComponent {
  weekDayData: WeekDaySchema[] = weekDayData;
  familyData: FamilySchema[] = familyData;

  getPersonPicture(personFirstName: string): string {
    const selectedPerson = this.familyData.find(
      (person) => person.firstname === personFirstName
    );
    return selectedPerson ? selectedPerson.picture : '';
  }
}
