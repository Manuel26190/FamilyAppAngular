export class WeekDaySchema {
  id: number;
  day: string;
  color: string;

  constructor(id: number, day: string, color: string) {
    this.id = id;
    this.day = day;
    this.color = color;
  }
}
