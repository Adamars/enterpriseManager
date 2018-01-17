import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SocialLoginComponent} from '../components/social-login/social-login.component';
import {MaterialModule} from '../shared/material.module';


const routes: Routes = [
  {path: '', loadChildren: '../components/contactmanager/contactmanager.module#ContactmanagerModule'},
  {path: 'social', component: SocialLoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule,
    MaterialModule],
})

export class AppRoutingModule {
}
