import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { HeaderComponent } from './header/header.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
{path:'',component:HeaderComponent}, // home
{path:'tech',component:TechNewsComponent}, // Tech News
{path:'business',component:BusinessNewsComponent}, // Business News

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
