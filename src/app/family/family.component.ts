import { Component } from '@angular/core';
import { FamilySchema } from '../Family.Schema';
import { familyData } from '../data.family';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrl: './family.component.css',
})
export class FamilyComponent {
  familyData: FamilySchema[];

  constructor() {
    this.familyData = familyData;
  }
}
