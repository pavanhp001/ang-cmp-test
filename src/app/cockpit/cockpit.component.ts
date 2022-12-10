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
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.addNewServer.emit({
      "newServerName":this.newServerName,
       "newServerContent":this.newServerContent
      });
  }

  onAddBlueprint() {
    this.addNewBlueprint.emit({
      "newServerName":this.newServerName,
       "newServerContent":this.newServerContent
      });
  }

}
