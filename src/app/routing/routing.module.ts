import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SocialLoginComponent} from '../components/social-login/social-login.component';
import {DemoComponent} from '../components/demo/demo.component';


const routes: Routes = [
  {path: 'social', component: SocialLoginComponent},
  {path: '**', component: DemoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
