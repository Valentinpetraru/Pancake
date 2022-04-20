import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { SubNavBarComponent } from './core/sub-nav-bar/sub-nav-bar.component';
import { PopupNavBarComponent } from './shared/popup-nav-bar/popup-nav-bar.component';
import { ButtonColoredComponent } from './shared/button-colored/button-colored.component';
import { ButtonBasicComponent } from './shared/button-basic/button-basic.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { SelectBarComponent } from './shared/select-bar/select-bar.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { SwapComponent } from './views/trade/swap/swap.component';
import { LimitComponent } from './views/trade/limit/limit.component';
import { LiquidityComponent } from './views/trade/liquidity/liquidity.component';
import { PerpetualComponent } from './views/trade/perpetual/perpetual.component';
import { FarmsComponent } from './views/earn/farms/farms.component';
import { PoolsComponent } from './views/earn/pools/pools.component';
import { TradingCompetitionComponent } from './views/win/trading-competition/trading-competition.component';
import { PredictionComponent } from './views/win/prediction/prediction.component';
import { LotteryComponent } from './views/win/lottery/lottery.component';
import { OverviewComponent } from './views/nft/overview/overview.component';
import { CollectionsComponent } from './views/nft/collections/collections.component';
import { ActivityComponent } from './views/nft/activity/activity.component';
import { InfoComponent } from './views/dots/info/info.component';
import { IfoComponent } from './views/dots/ifo/ifo.component';
import { VotingComponent } from './views/dots/voting/voting.component';
import { LeaderbordComponent } from './views/dots/leaderbord/leaderbord.component';
import { BlogsComponent } from './views/dots/blogs/blogs.component';
import { DocsComponent } from './views/dots/docs/docs.component';
import { CardHomepageComponent } from './shared/card-homepage/card-homepage.component';
import { CardTradeComponent } from './shared/card-trade/card-trade.component';
import { CardPredictionComponent } from './shared/card-prediction/card-prediction.component';
import { CardCollectionComponent } from './shared/card-collection/card-collection.component';
import { SettingsComponent } from './shared/settings/settings.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SubNavBarComponent,
    PopupNavBarComponent,
    ButtonColoredComponent,
    ButtonBasicComponent,
    SearchBarComponent,
    SelectBarComponent,
    HomepageComponent,
    SwapComponent,
    LimitComponent,
    LiquidityComponent,
    PerpetualComponent,
    FarmsComponent,
    PoolsComponent,
    TradingCompetitionComponent,
    PredictionComponent,
    LotteryComponent,
    OverviewComponent,
    CollectionsComponent,
    ActivityComponent,
    InfoComponent,
    IfoComponent,
    VotingComponent,
    LeaderbordComponent,
    BlogsComponent,
    DocsComponent,
    CardHomepageComponent,
    CardTradeComponent,
    CardPredictionComponent,
    CardCollectionComponent,
    SettingsComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
