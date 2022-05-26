import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { DocsComponent } from './views/docs/docs.component';
import { IfoComponent } from './views/ifo/ifo.component';
import { InfoComponent } from './views/info/info.component';
import { LeaderbordComponent } from './views/leaderbord/leaderbord.component';
import { VotingComponent } from './views/voting/voting.component';
import { FarmsComponent } from './views/farms/farms.component';
import { PoolsComponent } from './views/pools/pools.component';
import { ActivityComponent } from './views/activity/activity.component';
import { CollectionsComponent } from './views/collections/collections.component';
import { OverviewComponent } from './views/overview/overview.component';
import { LimitComponent } from './views/limit/limit.component';
import { LiquidityComponent } from './views/liquidity/liquidity.component';
import { PerpetualComponent } from './views/perpetual/perpetual.component';
import { SwapComponent } from './views/swap/swap.component';
import { LotteryComponent } from './views/lottery/lottery.component';
import { PredictionComponent } from './views/prediction/prediction.component';
import { TradingCompetitionComponent } from './views/swap/trading-competition/trading-competition.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { SelectBarComponent } from './shared/select-bar/select-bar.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { PopupNavBarComponent } from './shared/popup-nav-bar/popup-nav-bar.component';
import { CardTradeComponent } from './shared/card-trade/card-trade.component';
import { CardPredictionComponent } from './shared/card-prediction/card-prediction.component';
import { CardHomepageComponent } from './shared/card-homepage/card-homepage.component';
import { CardCollectionComponent } from './shared/card-collection/card-collection.component';
import { ButtonBasicComponent } from './shared/button-basic/button-basic.component';
import { ButtonConnectComponent } from './shared/button-connect/button-connect.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SubNavBarComponent } from './core/sub-nav-bar/sub-nav-bar.component';
import { ToggleComponent } from './shared/toggle/toggle.component';
import { HomepageComponent } from './Project/homepage/homepage.component';
import { MoonComponent } from './Project/homepage/moon/moon.component';
import { LotteryTimerComponent } from './Project/homepage/moon/lottery-timer/lottery-timer.component';
import { WinComponent } from './Project/homepage/win/win.component';
import { FinishedComponent } from './views/swap/trading-competition/finished/finished.component';
import { ClockComponent } from './views/swap/trading-competition/finished/clock/clock.component';
import { ContentTextComponent } from './views/swap/trading-competition/finished/content-text/content-text.component';
import { CalcComponent } from './views/swap/trading-competition/finished/calc/calc.component';
import { ComComponent } from './views/swap/trading-competition/finished/com/com.component';
import { MessageComponent } from './views/swap/trading-competition/finished/message/message.component';
import { PnacardComponent } from './views/swap/trading-competition/finished/pnacard/pnacard.component';
import { DetailsComponent } from './views/swap/trading-competition/finished/details/details.component';
import { TablePrizeTeamComponent } from './views/swap/trading-competition/finished/table-prize-team/table-prize-team.component';
import { StepCardComponent } from './views/lottery/step-card/step-card.component';
import { TopTradersTableComponent } from './views/swap/trading-competition/finished/top-traders-table/top-traders-table.component';
import { ConnectPopupComponent } from './modals/connect-popup/connect-popup.component';
import { FirstSectionComponent } from './views/lottery/first-section/first-section.component';
import { SecondSectionComponent } from './views/lottery/second-section/second-section.component';
import { ThirdSectionComponent } from './views/lottery/third-section/third-section.component';
import { LastSectionComponent } from './views/swap/trading-competition/finished/last-section/last-section.component';
import { RulesComponent } from './views/swap/trading-competition/finished/rules/rules.component';
import { PrizesComponent } from './views/swap/trading-competition/finished/prizes/prizes.component';
import { TopTradersComponent } from './views/swap/trading-competition/finished/top-traders/top-traders.component';
import { SectionCakeMakesComponent } from './shared/section-cake-makes/section-cake-makes.component';
import { SubMenuComponent } from './core/nav-bar/sub-menu/sub-menu/sub-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    DocsComponent,
    IfoComponent,
    InfoComponent,
    LeaderbordComponent,
    VotingComponent,
    FarmsComponent,
    PoolsComponent,
    ActivityComponent,
    CollectionsComponent,
    OverviewComponent,
    LimitComponent,
    LiquidityComponent,
    PerpetualComponent,
    SwapComponent,
    LotteryComponent,
    PredictionComponent,
    TradingCompetitionComponent,
    SettingsComponent,
    SelectBarComponent,
    SearchBarComponent,
    PopupNavBarComponent,
    CardTradeComponent,
    CardPredictionComponent,
    CardHomepageComponent,
    CardCollectionComponent,
    ButtonBasicComponent,
    ButtonConnectComponent,
    FooterComponent,
    NavBarComponent,
    SubNavBarComponent,
    SubMenuComponent,
    ToggleComponent,
    HomepageComponent,
    MoonComponent,
    LotteryTimerComponent,
    WinComponent,
    FinishedComponent,
    ClockComponent,
    ContentTextComponent,
    CalcComponent,
    ComComponent,
    MessageComponent,
    PnacardComponent,
    DetailsComponent,
    TablePrizeTeamComponent,
    StepCardComponent,
    TopTradersTableComponent,
    ConnectPopupComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    LastSectionComponent,
    RulesComponent,
    PrizesComponent,
    TopTradersComponent,
    SectionCakeMakesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
