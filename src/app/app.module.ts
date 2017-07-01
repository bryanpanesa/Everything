import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    // pathMatch: 'full'
  },
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
    path: 'directory/:name',
    component: DirectoryComponent
  },
  {
    path: 'directory/:name/:id',
    component: DirectoryComponent
  },
  { 
    path: '**', 
    component: PagenotfoundComponent 
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    PagenotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
