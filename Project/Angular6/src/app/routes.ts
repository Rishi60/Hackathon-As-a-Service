import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';
import { ReviewComponent } from './review/review.component';
import { AuthGuard } from './auth/auth.guard';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { SuperadminhomeComponent } from './superadminhome/superadminhome.component';
import { ProblemcommitteeComponent } from './problemcommittee/problemcommittee.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'admin', component: AdminComponent
    },
    {
        path: 'superadmin', component: SuperadminComponent
    },
    {
        path: 'superadminhome', component: SuperadminhomeComponent
    },
    {
        path: 'review', component: ReviewComponent
    },
    {
        path: 'problemcommittee', component: ProblemcommitteeComponent 
    }
];