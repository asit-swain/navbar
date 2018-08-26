import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-tripplanner',
  templateUrl: './tripplanner.component.html',
  styleUrls: ['./tripplanner.component.css']
})
export class TripplannerComponent 
  
  implements OnInit {
    srcControl = new FormControl();
    destControl = new FormControl();
    options: string[] = ['Big Bazzar', 'Silicon', 'Infocity', 'Patia'];
    filteredOptionsSrc: Observable<string[]>;
    filteredOptionsDest: Observable<string[]>;
    ngOnInit() {
      this.filteredOptionsSrc = this.srcControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value)
        ));
      this.filteredOptionsDest = this.destControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}
