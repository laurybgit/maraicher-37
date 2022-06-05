import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SellingPointsComponent } from './selling-points/selling-points.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ExploitationComponent } from './exploitation/exploitation.component';

const routes: Routes = [
  // pathMatch: par défaut à prefix, penser à mettre à full pour ne pas faire une boucle infinie dans la redirection sur ''
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {
    path: 'accueil',
    component: HomeComponent,
  },
  { path: 'points-de-vente', component: SellingPointsComponent },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'exploitation',
    component: ExploitationComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
