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

  selectedPersonMatin: string = ''; // Déclarez la propriété ici et initialisez-la si nécessaire
  selectedPersonMidi: string = ''; // Ajoutez les autres propriétés si nécessaire
  selectedPersonSoir: string = '';

  getPersonPicture(personFirstName: string): string {
    // Ici, vous devriez mettre en place la logique pour récupérer le chemin de l'image
    // correspondant à la personne dont le prénom est personFirstName.
    // Vous pouvez, par exemple, parcourir le tableau familyData pour trouver la personne
    // et retourner le chemin de son image.

    // Exemple de logique (assurez-vous d'ajuster cela en fonction de votre structure de données réelle) :
    const selectedPerson = this.familyData.find(
      (person) => person.firstname === personFirstName
    );
    return selectedPerson ? selectedPerson.picture : ''; // Retourne le chemin de l'image ou une chaîne vide si la personne n'est pas trouvée.
  }
}
