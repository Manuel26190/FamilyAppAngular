export class FamilySchema {
  id: number;
  firstname: string;
  name: string;
  activity: string;
  picture: string;

  constructor(
    id: number,
    firstname: string,
    name: string,
    activity: string,
    picture: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.name = name;
    this.activity = activity;
    this.picture = picture;
  }
}
