import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { HeaderComponent } from './components/header/header.component'
import { CommonModule } from '@angular/common'
import { ListComponent } from './pages/list/list.component'
import { CategoriesComponent } from './pages/categories/categories.component'
import { customAnimation } from './controllers/animation.controller'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ListComponent,
		CategoriesComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		IonicModule.forRoot({ navAnimation: customAnimation }),
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
