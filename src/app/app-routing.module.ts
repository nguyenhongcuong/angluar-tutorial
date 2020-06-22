import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'servers',
        canActivateChild: [AuthGuard],
        component: ServersComponent, children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }

        ]
    },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent },

        ]
    },
    {
        path: 'not-found', 
        component: ErrorComponent,
        data :{
            message: 'Page not found!'
        }
    },
    {
        path: '**', redirectTo: '/not-found'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            useHash: true
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}