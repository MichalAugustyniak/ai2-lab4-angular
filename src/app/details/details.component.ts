import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../person.service';
import {Person} from '../Person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) { }

  person: Person = {
    address: {}
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      console.log(params);
      this.person = this.personService.readByIndex(params['id'] as number);
    })
  }
}
