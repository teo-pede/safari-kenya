import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SafarisComponent } from './pages/safaris/safaris.component';
import { ExcursionsComponent } from './pages/excursions/excursions.component';
import { canDeactivateGuard } from './can-deactivate.guard'

const routes: Routes = [
  { path: '', component: HomePageComponent, canDeactivate: [canDeactivateGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'excursions', component: ExcursionsComponent, canDeactivate: [canDeactivateGuard] },
  { path: 'safaris', component: SafarisComponent, canDeactivate: [canDeactivateGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    canceledNavigationResolution: 'computed', 
    anchorScrolling: "enabled",
    enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
