import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Project/homepage/homepage.component';
import { ActivityComponent } from './views/activity/activity.component';
import { CollectionsComponent } from './views/collections/collections.component';
import { FarmsComponent } from './views/farms/farms.component';
import { IfoComponent } from './views/ifo/ifo.component';
import { InfoComponent } from './views/info/info.component';
import { TokensComponent } from './views/info/tokens/tokens.component';
import { LeaderbordComponent } from './views/leaderbord/leaderbord.component';
import { LimitComponent } from './views/limit/limit.component';
import { LiquidityComponent } from './views/liquidity/liquidity.component';
import { LotteryComponent } from './views/lottery/lottery.component';
import { OverviewComponent } from './views/overview/overview.component';
import { PerpetualComponent } from './views/perpetual/perpetual.component';
import { PoolsComponent } from './views/pools/pools.component';
import { PredictionComponent } from './views/prediction/prediction.component';
import { SwapComponent } from './views/swap/swap.component';
import { TradingCompetitionComponent } from './views/swap/trading-competition/trading-competition.component';
import { VotingComponent } from './views/voting/voting.component';

const routes: Routes = [

  {path: '', component: HomepageComponent},
  {path: 'swap', component: SwapComponent},
  {path: 'limit', component: LimitComponent},
  {path: 'liquidity', component: LiquidityComponent},
  {path: 'perpetual', component: PerpetualComponent},
  {path: 'farms', component: FarmsComponent},
  {path: 'pools', component: PoolsComponent},
  {path: 'competition', component: TradingCompetitionComponent},
  {path: 'prediction', component: PredictionComponent},
  {path: 'lottery', component: LotteryComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'collection', component: CollectionsComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'info', component: InfoComponent, children: [
    {path: 'tokens', component:TokensComponent}
  ]

  },
  {path: 'ifo', component: IfoComponent},
  {path: 'voting', component: VotingComponent},
  {path: 'leaderboard', component: LeaderbordComponent}
];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
