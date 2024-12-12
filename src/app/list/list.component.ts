import { Component } from '@angular/core';
import {PersonService} from '../person.service';
import {Person} from '../Person';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './list.component.css'
})
export class ListComponent {
  personArray: Person[] = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    this.personArray = this.personService.read();
  }

  public delete(index: number): void {
    this.personService.delete(index);
    this.personArray.splice(index, 1);
  }
}
