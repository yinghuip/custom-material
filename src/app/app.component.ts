import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-material';
  routeLinks:{Title:string,Path:string| undefined }[];
  constructor(private _router: Router){
   this.routeLinks =  _router.config.map(r=>{ return {Title: `${r.path}`, Path: r.path}});
  }
}
