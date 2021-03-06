import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberAddComponent } from './member/member-add/member-add.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './files/files.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
        {path: '', component: HomeComponent},
        {
            path: '',
            runGuardsAndResolvers: 'always',
            canActivate: [AuthGuard],
            children: [
            {path: 'clientes', component: MemberListComponent, canActivate: [AuthGuard]},
            {path: 'clientes/add', component: MemberAddComponent, canActivate: [AuthGuard]},
            {path: 'clientes/edit', component: MemberEditComponent, canActivate: [AuthGuard]},
            {path: 'messagens', component: MessagesComponent},
            {path: 'arquivos', component: ListsComponent},
            ]
    },
        {path: '**', redirectTo: '', pathMatch: 'full'},
    ];

    //            {path: 'member/edit', component: MemberEditComponent,
   //            resolve: {user: MemberEditResolver}, canActivate: [AuthGuard]},
