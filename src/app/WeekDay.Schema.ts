export class WeekDaySchema {
  id: number;
  day: string;
  color: string;
  selectedPersonMatin: string;
  selectedPersonMidi: string;
  selectedPersonSoir: string;

  constructor(
    id: number,
    day: string,
    color: string,
    selectedPersonMatin: string,
    selectedPersonMidi: string,
    selectedPersonSoir: string
  ) {
    this.id = id;
    this.day = day;
    this.color = color;
    this.selectedPersonMatin = selectedPersonMatin;
    this.selectedPersonMidi = selectedPersonMidi;
    this.selectedPersonSoir = selectedPersonSoir;
  }
}
