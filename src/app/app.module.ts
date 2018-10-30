import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SalesComponent } from './pages/sales/sales.component';
import { TerminalsComponent } from './pages/terminals/terminals.component';
import { PosComponent } from './pages/pos/pos.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { NavbarComponent } from './pages/navbar/navbar.component'
import { DataTableModule } from 'angular-6-datatable';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'terminals', component: TerminalsComponent },
  { path: 'pos', component: PosComponent },
  { path: 'food', component: FoodsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SalesComponent,
    TerminalsComponent,
    PosComponent,
    FoodsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
