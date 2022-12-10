import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(inputElement:HTMLInputElement) {
    this.addNewServer.emit({
      "newServerName":inputElement.value,
       "newServerContent":this.newServerContent
      });
  }

  onAddBlueprint(inputElement:HTMLInputElement) {
    this.addNewBlueprint.emit({
      "newServerName":inputElement.value,
       "newServerContent":this.newServerContent
      });
  }

}
