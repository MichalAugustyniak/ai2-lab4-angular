import { Component } from '@angular/core';
import {Person} from '../Person';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent {
  person: Person = {
    address: {}
  };


  constructor(private personService: PersonService, private router: Router) {
  }

  public save() {
    this.personService.add(this.person);
    this.router.navigate(['']);
  }
}
