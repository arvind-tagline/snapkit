import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snapkit';

  // constructor(private activeRoute:ActivatedRoute,private router:Router){
  //   console.log('this.activeRoute :>> ', this.activeRoute);
  //   console.log('this.router :>> ', this.router);
  //   this.activeRoute.params.subscribe((res:any)=>{
  //     console.log('res :>> ', res);
  //   })
  //   this.activeRoute.queryParams.subscribe((res:any)=>{
  //     console.log('queryParams :>> ', res);
  //   })
  // }
}
