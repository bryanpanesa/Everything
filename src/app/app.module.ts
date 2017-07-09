import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';

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
    FilterPipe,
    PagenotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
