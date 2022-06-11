import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLiquidityComponent } from './chart-liquidity/chart-liquidity.component';
import { SearchNavigationComponent } from './search-navigation/search-navigation.component';
import { TokensComponent } from './tokens/tokens.component';
import { TopPoolsTableComponent } from './top-pools-table/top-pools-table.component';
import { TopTokensTableComponent } from './top-tokens-table/top-tokens-table.component';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoRoutingModule } from './info_routing_module';
import { InfoContainerComponent } from './info-container.component';
import { InfoComponent } from './info.component';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { RandomPercentagePipe } from './pipes/random-percentage.pipe';
import { PoolsComponent } from './pools/pools.component';
import { WatchlistTokenComponent } from './tokens/watchlist-token/watchlist-token.component';
import { TopMoversComponent } from './tokens/top-movers/top-movers.component';





@NgModule({
  declarations: [
    ChartLiquidityComponent,
    SearchNavigationComponent,
    TokensComponent,
    TopPoolsTableComponent,
    TopTokensTableComponent,
    TransactionsTableComponent,
    InfoContainerComponent,
    InfoComponent,
    NumberSuffixPipe,
    RandomPercentagePipe,
    PoolsComponent,
    WatchlistTokenComponent,
    TopMoversComponent,


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InfoRoutingModule
  ]

})
export class InfoModule { }
