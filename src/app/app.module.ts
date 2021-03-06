import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { ListsComponent } from './files/files.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { ClienteService } from './_services/cliente.service';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import {NgxPaginationModule} from 'ngx-pagination';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberAddComponent } from './member/member-add/member-add.component';

export function getToken() {
   return localStorage.getItem('token');
 }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      MemberListComponent,
      MemberAddComponent,
      MemberAddComponent,
      ListsComponent,
      MessagesComponent,
      MemberEditComponent,
      MemberAddComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: function  tokenGetter() {
               return     localStorage.getItem('token');
             },
           whitelistedDomains: ['localhost:5000'],
           blacklistedRoutes: ['localhost:5000/api/auth']
         }
       }),
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxPaginationModule,
      ReactiveFormsModule,
   ],
   providers: [
      AuthService,
      ClienteService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
