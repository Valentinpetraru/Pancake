import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Project/homepage/homepage.component';
import { FarmsComponent } from './views/farms/farms.component';
import { PoolsComponent } from './views/pools/pools.component';
import { SwapComponent } from './views/swap/swap.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'farms', component:FarmsComponent},
  {path: 'pools', component: PoolsComponent},
  {path: 'swap', component: SwapComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
