import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as snapkit from 'snapkit';



@Injectable({
  providedIn: 'root'
})
export class SnapkitService {

  constructor(private http: HttpClient) { }

  // login({
  //   redirectURI: 'https://example.com/callback',
  //   responseType: 'token',
  //   scope: 'https://auth.snapchat.com/oauth2/api/user.display_name',
  //   clientId: 'YOUR_CLIENT_ID',
  // });

  // public getUserName(){
  //   return this.http.get("https://auth.snapchat.com/oauth2/api/user.display_name");
  // }

  public createApp(body:any) {
    // const client_id = 'your_client_id_here';
    // const redirect_uri = 'your_redirect_uri_here';
    // const scope = 'https://auth.snapchat.com/oauth2/api/user.display_name';

    // const authUrl = `https://accounts.snapchat.com/accounts/oauth2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code`;

    // // Redirect user to the Snapchat authorization page
    // window.location.href = authUrl;
    const header = {
      Authorization: "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjc3MjM2MjI2LCJzdWIiOiIyYWMwMjcyNS1iMzA1LTQ2MDYtOTA2Zi04MmYxMmVmODk0MmN-U1RBR0lOR34wY2Q2ZWUwOC0yMzY1LTQzNWQtODU5OC03YzI0N2ZjN2U4NGMifQ.PtGqNv6fnV9caI_oqkBzChg2N2XJIkUX_NDhScJRaKE"
    }    
    return this.http.post('https://accounts.snapchat.com/login/oauth2/access_token', body);

    // After user grants permission and is redirected back to your application with an authorization code
    // const code = 'your_authorization_code_here';

    // this.http.post(tokenUrl, body).subscribe((response: any) => {
    //   const access_token = response.access_token;

    //   // Get user information, including app username
    //   const meUrl = 'https://api.snapchat.com/v1/me';
    //   const headers = {
    //     'Authorization': `Bearer ${access_token}`
    //   };
    //   this.http.get(meUrl, { headers }).subscribe((response: any) => {
    //     const app_username = response.data.me.username;
    //     console.log(`User's app username: ${app_username}`);
    //   });
    // });
  }

  public getSnap() {
    const client_id = 'a4b7cb21-cf25-4cf8-b332-c8ef0c774776';
    const redirect_uri = 'https://conver-1b364.web.app/snapchat/MALtHi4OQLby0hgn1TlAqgnPAav2';
    const scope = 'https://auth.snapchat.com/oauth2/api/user.display_name';
    const authUrl = `https://accounts.snapchat.com/accounts/v2/login?continue=%2Faccounts%2Foauth2%2Fauth%3Fclient_id%3Da4b7cb21-cf25-4cf8-b332-c8ef0c774776%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A4201%252F%26response_type%3Dtoken%26scope%3Dhttps%253A%252F%252Fauth.snapchat.com%252Foauth2%252Fapi%252Fuser.display_name%2520https%253A%252F%252Fauth.snapchat.com%252Foauth2%252Fapi%252Fuser.bitmoji.avatar`;
    // const authUrl = `https://accounts.snapchat.com/accounts/v2/login?continue=%2Faccounts%2Foauth2%2Fauth%3Fclient_id%3Da4b7cb21-cf25-4cf8-b332-c8ef0c774776%26redirect_uri%3Dhttps%253A%252F%252Fconver-1b364.web.app%252Fsnapchat%252F12%26response_type%3Dtoken%26scope%3Dhttps%253A%252F%252Fauth.snapchat.com%252Foauth2%252Fapi%252Fuser.display_name%2520https%253A%252F%252Fauth.snapchat.com%252Foauth2%252Fapi%252Fuser.bitmoji.avatar`;
    // Redirect user to the Snapchat authorization page
    window.location.href = authUrl;

    // After user grants permission and is redirected back to your application with an authorization code
    // const code = 'your_authorization_code_here';

    // Exchange authorization code for access token
    // const tokenUrl = 'https://accounts.snapchat.com/accounts/oauth2/token';
    // const body = {
    //   grant_type: 'authorization_code',
    //   redirect_uri,

    //   client_id,
    //   client_secret: 'b23b4cf4-9755-4807-894b-34d89738dcb6'
    // };

    // this.http.post(tokenUrl, body).subscribe((response: any) => {
    //   const access_token = response.access_token;

    //   // Get user information, including app username
    //   const meUrl = 'https://api.snapchat.com/v1/me';
    //   const headers = {
    //     'Authorization': `Bearer ${access_token}`
    //   };

    //   this.http.get(meUrl, { headers }).subscribe((response: any) => {
    //     const app_username = response.data.me.username;
    //     console.log(`User's app username: ${app_username}`);
    //   });
    // });
  }
  

  public getUser(data:any){
    return this.http.post("https://us-central1-gcp.api.snapchat.com/web-analytics/web/init_client", data);
  }

  public getUserDetails(access_token: any, data: any) {
    const headers = new HttpHeaders(
      {
        authorization: `Bearer ${access_token}`,
        'access-control-allow-origin': 'http://localhost:4201',
        'access-control-allow-methods': 'POST',
        'access-control-allow-headers': 'Content-Type',
      }
      // 'access-control-allow-origin': 'http://localhost:4201'
    );
    return this.http.post("https://api.snapchat.com/v1/me",data,{ headers: headers });
  }

  public getMyData(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders(
      {
        authorization:`Bearer ${token}`,
      }
    );
    return this.http.get('https://auth.snapchat.com/oauth2/api/user.display_name',{headers:headers});
  }
}
