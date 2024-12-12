import {Injectable} from '@angular/core';
import {Person} from './Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  public read(): Person[] {
    let json: string | null = localStorage.getItem('person-array');
    if (!json) {
      throw Error('No saved person array')
    }
    return JSON.parse(json);
  }

  public readByIndex(index: number): Person {
    let json: string | null = localStorage.getItem('person-array');
    if (!json) {
      throw Error('No saved person array');
    }
    let personArray: Person[] = JSON.parse(json);
    let person: Person | undefined = personArray.at(index);
    if (!person) {
      throw Error('Undefined')
    }
    return person;
  }

  public add(person: Person): void {
    let json: string | null = localStorage.getItem('person-array');
    let personArray: Person[];
    if (!json) {
      personArray = [];
    } else {
      personArray = JSON.parse(json);
    }
    personArray.push(person);
    localStorage.setItem('person-array', JSON.stringify(personArray));
  }

  public delete(index: number): void {
    let json: string | null = localStorage.getItem('person-array');
    if (!json) {
      throw Error('No saved person array');
    }
    let personArray: Person[] | null = JSON.parse(json);
    personArray?.splice(index, 1);
    localStorage.setItem('person-array', JSON.stringify(personArray));
  }
}
