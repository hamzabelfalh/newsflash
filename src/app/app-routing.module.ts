import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'fruits/home',
      pathMatch: 'full',
    },
    {
      path: 'client',
      redirectTo: 'client/home',
      pathMatch: 'full',
    },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
