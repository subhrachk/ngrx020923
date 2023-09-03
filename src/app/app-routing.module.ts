import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  {'path' : 'home',component:HomeComponent},
  {'path' : 'counter',component:CounterComponent},
  {'path' : 'blogs',component:BlogsComponent},
  {'path' : '*',redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
