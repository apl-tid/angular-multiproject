import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('@app1/main.module').then(m => m.MainModule)
  },
  {
    path: 'app2',
    loadChildren: () => import('@app2/main.module').then(m => m.MainModule)
  },
  { path: '**', redirectTo: 'app1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
