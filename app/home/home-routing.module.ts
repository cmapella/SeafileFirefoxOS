import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { AuthGuard } from "../guards/auth-guard.service";

const homeRoutes: Routes = [
	{
		path: 'userspace',
		canActivate: [AuthGuard],
		children: [
			{ path: 'librairies', component: HomeComponent },
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(homeRoutes)
	],
	exports: [
		RouterModule
	]
})
export class HomeRoutingModule { }