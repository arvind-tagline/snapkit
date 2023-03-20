import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SnapkitService } from 'src/app/service/snapkit.service';
import { template_ref } from 'src/app/testSVG/svg';
// import * as snapkit from 'snapkit';


declare var Snap: any;

@Component({
  selector: 'app-snapkit',
  templateUrl: './snapkit.component.html',
  styleUrls: ['./snapkit.component.scss']
})
export class SnapkitComponent implements OnInit {

  public icons = template_ref;
  constructor(private snapKit:SnapkitService,private route:ActivatedRoute) { }
  clientId = 'b3435ae1-9751-4eeb-a09c-795f910eb0d4';
  redirectUri = 'https://conver-1b364.web.app';
  scope = 'https://auth.snapchat.com/oauth2/api/user.display_name';

  ngOnInit(): void {
    // this.create();
    // this.snapKit.getSnap();
    // this.onSnapchatLogin();
    // this.getUser();
    // console.log('this.route :>> ', this.route.snapshot.fragment);
    const temp:any = this.route.snapshot.fragment?.split("=");
    console.log('temp :>> ', temp);
    console.log('temp :>> ', temp);
    const access_token = temp[2].split("&");
    console.log('access_token :>> ', access_token);
    const data = {
      query: "{me{displayName bitmoji{avatar} externalId}}"
    }
    this.snapKit.getUserDetails(access_token[0],data).subscribe((res:any)=>{
      console.log('res :>> ', res);
    })
  }

  // public getUser(){
  //   const body = {
  //     grant_type: 'authorization_code',
  //     code: 'code',
  //     redirect_uri: 'http://localhost:4200',
  //     client_id: 'b3435ae1-9751-4eeb-a09c-795f910eb0d4',
  //     client_secret: 'b3435ae1-9751-4eeb-a09c-795f910eb0d4',
  //     // profileFields: ['id', 'displayName', 'bitmoji'],
  //     // scope: ['user.display_name', 'user.bitmoji.avatar']
  //   };
  //   this.snapKit.getUser(body).subscribe((res:any)=>{
  //     localStorage.setItem('token',res.token);
  //     console.log('res :>> ', res);
  //     // this.getMyData();
  //   });
  // }

  public getMyData(){
    this.snapKit.getMyData().subscribe((res:any)=>{
      console.log('userdata :>> ', res);
    });
  }
  
  public create() {
    const body = {
      grant_type: 'authorization_code',
      code: 'code',
      redirect_uri: 'https://conver-1b364.web.app/',
      client_id: 'b3435ae1-9751-4eeb-a09c-795f910eb0d4',
      client_secret: 'b3435ae1-9751-4eeb-a09c-795f910eb0d4'
    };
    this.snapKit.createApp(body).subscribe((res: any) => {
      console.log('res :>> ', res);
    });
  }
  
  snapchatLogin() {
    this.snapKit.getSnap();

    // Snap.init(this.clientId, {
    //   redirectUri: this.redirectUri,
    //   scopeList: [this.scope]
    // }).then(() => {
    //   Snap.loginkit.login({
    //     redirectURI: this.redirectUri
    //   }).then((response: any) => {
    //     // Handle the user's login data
    //     console.log('------------------->',response);
    //   }).catch((error: any) => {
    //     // Handle errors
    //     console.log(error);
    //   });
    // });
  }


  public onSnapchatLogin() {
    // login({
    //   redirectURI: 'http://localhost:4200/',
    //   responseType: 'token',
    //   scope: 'https://auth.snapchat.com/oauth2/api/user.display_name',
    //   clientId: 'b3435ae1-9751-4eeb-a09c-795f910eb0d4',
    // }).then((response: any) => {
    //   console.log(response);
    //   // Handle the authentication response here
    // }).catch((error: any) => {
    //   console.error(error);
    //   // Handle the authentication error here
    // });
    // snapkit.login({
    //   redirectURI: 'http://localhost:4200/',
    //   responseType: 'token',
    //   scope: 'https://auth.snapchat.com/oauth2/api/user.display_name',
    //   clientId: 'b3435ae1-9751-4eeb-a09c-795f910eb0d4',
    // }).then((response: any) => {
    //   console.log(response);
    //   // Handle the authentication response here
    // }).catch((error: any) => {
    //   console.error(error);
    //   // Handle the authentication error here
    // });
    
  }
}
