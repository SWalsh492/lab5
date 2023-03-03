import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
  presidents: any[] = [{name: "Higgens", term: "[2011-Present]"}, {name: "McAleese", term: "[1997-2011]"},{name: "Robinson", term: "[1990-1997]"}, {name: "Hillery", term: "[1976-1990]"},{name: "Joe Duffy", term: "[2024-2026]"}, {name: "Higgen's Dog", term: "[2026-2046]"}, {name: "Reincarnated De Valera", term: "[2172-2178]"}, {name: "Irish Batman", term: "[2061-2074]"}, {name: "Peter Barker", term: "[56AD-62AD]"}];
}
