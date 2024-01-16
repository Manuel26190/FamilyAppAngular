import { Component } from '@angular/core';
import { FamilySchema } from '../Family.Schema';
import { familyData } from '../data.family';

@Component({
  selector: 'app-lulu-array',
  templateUrl: './lulu-array.component.html',
  styleUrl: './lulu-array.component.css',
})
export class LuluArrayComponent {
  familyData: FamilySchema[] = familyData;
  constructor() {
    //console.log(familyData);
  }
}
