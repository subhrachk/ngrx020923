import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { counterReducer } from './shared/store/counter/counter.reducer';
import { CounterbuttonComponent } from './components/counter/counterbutton/counterbutton.component';
import { CustomcounterComponent } from './components/counter/customcounter/customcounter.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { blogReducer } from './shared/store/blogs/blog.reducer';
import { NewblogComponent } from './components/blogs/newblog/newblog.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BlogsComponent,
    CounterbuttonComponent,
    CustomcounterComponent,
    MenuComponent,
    HomeComponent,
    NewblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter : counterReducer, Blogs : blogReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
