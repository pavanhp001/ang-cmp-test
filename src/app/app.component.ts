import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: any[] = [{type:"test", name:"server Name", content:"server content"}];

  onAddServer(server:{"newServerName":string, "newServerContent":string}) {
    this.serverElements.push({
      type: 'server',
      name: server.newServerName,
      content: server.newServerContent
    });
  }

  onAddBlueprint(bluePrint:{"newServerName":string, "newServerContent":string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrint.newServerName,
      content: bluePrint.newServerContent
    });
  }
}
