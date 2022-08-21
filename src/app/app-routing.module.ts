import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { CategoriesComponent } from './pages/categories/categories.component'
import { ListComponent } from './pages/list/list.component'

/**
 * IF YOUR NAME IS NOT IN THE FOLLOWING YOU SHOULD NOT BE HERE
 * SIMON MAXWELL
 */

const routes: Routes = [
	// {
	//   path: 'home',
	//   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
	// },
	{
		path: 'home',
		component: ListComponent,
	},
	{
		path: 'categories',
		component: CategoriesComponent,
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
