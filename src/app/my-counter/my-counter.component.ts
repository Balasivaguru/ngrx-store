import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SavedConfigs } from '../counter.actions';
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit{
  savedConfigs$: Observable<string>;
  constructor(private store: Store<{ savedConfigs: string }>,private http:HttpClient) {
    this.savedConfigs$ = store.pipe(select('savedConfigs'));
  }
 ngOnInit(){
 this.store.dispatch(new SavedConfigs());
 }
 
  
}