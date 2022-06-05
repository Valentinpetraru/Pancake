import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Project/homepage/homepage.component';
import { FarmsComponent } from './views/farms/farms.component';
import { LotteryComponent } from './views/lottery/lottery.component';
import { PoolsComponent } from './views/pools/pools.component';
import { PredictionComponent } from './views/prediction/prediction.component';
import { SwapComponent } from './views/swap/swap.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'farms', component:FarmsComponent},
  {path: 'pools', component: PoolsComponent},
  {path: 'swap', component: SwapComponent},
  {path: 'prediction', component: PredictionComponent},
  {path: 'lottery', component: LotteryComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
