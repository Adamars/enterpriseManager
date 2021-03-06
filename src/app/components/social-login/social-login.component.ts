import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from 'angular4-social-login';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log('G+');
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log('FB');
  }

  signOut(): void {
    this.authService.signOut();
  }

}

