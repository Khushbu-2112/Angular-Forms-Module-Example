import { Component, OnInit, ViewChild } from '@angular/core'; 
import { FormsModule } from "@angular/forms";
import { Data } from '../data';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})

export class TemplateformComponent implements OnInit{

  constructor() { }

  model: Data = new Data();
  langs:string[] = [
    'English',
    'French',
    'German',
];

@ViewChild('f', {static: false}) form:any;

  ngOnInit() {
  }

  onSubmit(){
    console.log('submitted');
    this.form.reset();
  }

}
