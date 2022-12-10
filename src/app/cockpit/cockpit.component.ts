import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() 
  addNewServer = new EventEmitter<{"newServerName":string, "newServerContent":string}>();
  @Output() 
  addNewBlueprint = new EventEmitter<{"newServerName":string, "newServerContent":string}>();
  // newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput',{ static: true }) 
  serverContentInput: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(inputElement:HTMLInputElement) {
    //this.serverContentInput?.nativeElement.value = 'some value' //strangly dont use this approach this will mess the dom elements
    this.addNewServer.emit({
      "newServerName":inputElement.value,
       "newServerContent":this.serverContentInput?.nativeElement.value
      });
  }

  onAddBlueprint(inputElement:HTMLInputElement) {
    console.log('serverContentInput '+JSON.stringify(this.serverContentInput?.nativeElement.value))
    this.addNewBlueprint.emit({
      "newServerName":inputElement.value,
       "newServerContent":this.serverContentInput?.nativeElement.value
      });
  }

}
