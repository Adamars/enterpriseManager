import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {MaterialModule} from '../../shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ContactmanagerAppComponent} from './contactmanager-app.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {UserService} from './services/user.service';

import {NewContactDialogComponent} from './components/new-contact-dialog/new-contact-dialog.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {NotesComponent} from './components/notes/notes.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      {path: ':id', component: MainContentComponent},
      {path: '', component: MainContentComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    UserService,
  ],
  declarations: [
    ContactmanagerAppComponent,
    MainContentComponent,
    NotesComponent,
    SidenavComponent,
    ToolbarComponent,
    NewContactDialogComponent
  ],
  entryComponents: [
    NewContactDialogComponent
  ]
})
export class ContactmanagerModule {
}
